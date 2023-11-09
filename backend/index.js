// index.js
const express = require("express");
const passport = require("passport");
require("./config/passport"); // or wherever you set up passport

const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");
const portfolioRoutes = require("./routes/portfolioRoutes");
const shareTokenRoutes = require("./routes/shareTokenRoutes");

const cors = require("cors"); // Import the cors package

const jwt = require("jsonwebtoken");
const ExtractJwt = require("passport-jwt").ExtractJwt;

const session = require("express-session");

const app = express();

const PORT = process.env.PORT || 5000;

function checkTokenExpiration(req, res, next) {
  const token = ExtractJwt.fromAuthHeaderAsBearerToken()(req);

  // Decode the token without verifying - this is safe since we're not using the decoded information
  // to make any security-related decisions. We're only using it to check the expiration.
  const decoded = jwt.decode(token, { complete: true });

  if (decoded) {
    const exp = decoded.payload.exp;
    if (typeof exp === "number") {
      // Convert the expiration time from seconds to a Date object
      const expirationDate = new Date(exp * 1000);
      console.log("Token expires at:", expirationDate);

      // Check if the token has expired
      if (exp < Date.now() / 1000) {
        return res.status(401).json({ message: "Token has expired" });
      }
    } else {
      console.log("No valid expiration claim found in token:", decoded);
      //  return res.status(400).json({ message: 'Invalid token: No expiration claim' });
    }
  } else {
    // console.log('No token could be decoded from the request:', token);
    // return res.status(400).json({ message: 'Invalid or missing token' });
  }

  next();
}

app.use(cors()); // Use the cors middleware to allow all origins. Place this line before other middlewares and routes.

app.use(express.json());

app.use(passport.initialize());
//app.use(passport.session()); // If you're using sessions

// Build the MONGO_URI from the separate environment variables
const MONGO_HOST = process.env.MONGO_HOST;
const MONGO_PORT = process.env.MONGO_PORT;
const MONGO_USER = process.env.MONGO_USER;
const MONGO_PASS = process.env.MONGO_PASS;

if (!MONGO_HOST || !MONGO_PORT || !MONGO_USER || !MONGO_PASS) {
  console.error(
    "Some MongoDB environment variables are missing. Ensure you have them set up in docker-compose.yml."
  );
  process.exit(1);
}

// Updated MONGO_URI to include the username and password
const MONGO_URI = `mongodb://${MONGO_USER}:${MONGO_PASS}@${MONGO_HOST}:${MONGO_PORT}/admin`;

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch((err) => {
    console.error("Failed to connect to MongoDB:", err);
    process.exit(1);
  });

app.use("/api", checkTokenExpiration, authRoutes);
app.use("/api", checkTokenExpiration, shareTokenRoutes);
app.use("/api", portfolioRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error("Error:", err.message, "\nStack:", err.stack);
  res.status(500).send("Something went wrong!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

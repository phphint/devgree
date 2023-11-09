// PortfolioController.js
const User = require('../models/User');

exports.getPortfolio = async (req, res) => {
  // ... your route logic from the previous example here

  try {
    const { identifier } = req.params;
    let user;

    // Try to find by custom slug or share token
    user = await User.findOne({
      $or: [
        { 'settings.profileSlug': identifier },
        { 'settings.shareToken': identifier }
      ]
    });

    // Check if the user was found by slug or share token
    if (!user) {
      // If no user was found, it could be an _id
      if (identifier.match(/^[0-9a-fA-F]{24}$/)) { // This regex matches a valid MongoDB ObjectId
        user = await User.findById(identifier);
      }

      // If still not found, return 404
      if (!user) {
        return res.status(404).send({ message: 'Portfolio not found.' });
      }
    }

    // Check privacy settings
    if (user.settings.privacy === 'private' && identifier !== user.settings.shareToken) {
      // The profile is private and the identifier is not a share token
      return res.status(403).send({ message: 'This portfolio is private.' });
    }

    // The profile is either public or accessed by share token
    return res.json({
      // Return only the public profile data
      profile: user.profile,
      // ... other public fields
    });

  } catch (error) {
    return res.status(500).send({ message: error.message });
  }


};

module.exports = exports;
 

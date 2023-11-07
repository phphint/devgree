// multerConfig.js
const multer = require('multer');
const upload = multer({ dest: 'uploads/' }); // This will store files in local 'uploads' folder temporarily

module.exports = upload;

const User = require('../models/User');
const { v4: uuidv4 } = require('uuid'); // For generating unique slugs

exports.createShareToken = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    const newToken = {
      token: uuidv4(), // This will generate a unique slug
      expiresAt: req.body.expiresAt,
      visibility: req.body.visibility,
    };
    user.settings.shareTokens.push(newToken);
    await user.save();
    res.status(201).json({ message: 'Share token created successfully', newToken });
  } catch (error) {
    res.status(500).json({ message: 'Error creating share token', error });
  }
};

exports.getShareTokens = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    res.status(200).json(user.settings.shareTokens);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching share tokens', error });
  }
};

exports.deleteShareToken = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    user.settings.shareTokens = user.settings.shareTokens.filter(token => token.token !== req.params.slug);
    await user.save();
    res.status(200).json({ message: 'Share token deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting share token', error });
  }
};

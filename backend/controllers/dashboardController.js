// dashboardcontroler.js 

const DashboardDataHandler = require("../services/DashboardDataHandler");

const allowedSections = ['settings', 'education', 'workExperience', 'skills', 'projects', 'certifications', 'languages', 'testimonials', 'repositories'];

const isSectionAllowed = (section) => allowedSections.includes(section);

// Method to edit an item
exports.editItem = async (req, res) => {
  const { section, itemId } = req.params;
  const userId = req.user._id;
  const newData = req.body;

  console.log("Edit Item Request:", { section, itemId, userId, newData });

  if (!isSectionAllowed(section)) {
    console.log("Invalid section name:", section);
    return res.status(400).json({ message: 'Invalid section name' });
  }

  try {
    const updatedItem = await DashboardDataHandler.editItemById(userId, section, itemId, newData);
    console.log("Updated Item:", updatedItem);
    res.status(200).json(updatedItem);
  } catch (error) {
    console.error("Error in editItem:", error);
    res.status(500).json({ message: error.message });
  }
};

// Method to delete an item
exports.deleteItem = async (req, res) => {
  const { section, itemId } = req.params;
  const userId = req.user._id;

  console.log("Delete Item Request:", { section, itemId, userId });

  if (!isSectionAllowed(section)) {
    console.log("Invalid section name:", section);
    return res.status(400).json({ message: 'Invalid section name' });
  }

  try {
    const updatedSection = await DashboardDataHandler.deleteItemById(userId, section, itemId);
    console.log("Updated Section after Deletion:", updatedSection);
    res.status(200).json(updatedSection);
  } catch (error) {
    console.error("Error in deleteItem:", error);
    res.status(500).json({ message: error.message });
  }
};

// Method to add a new item
exports.addItem = async (req, res) => {
  const { section } = req.params;
  const userId = req.user._id;
  const newItem = req.body;

  console.log("Add Item Request:", { section, userId, newItem });

  if (!isSectionAllowed(section)) {
    console.log("Invalid section name:", section);
    return res.status(400).json({ message: 'Invalid section name' });
  }

  try {
    const addedItem = await DashboardDataHandler.addItem(userId, section, newItem);
    console.log("Added Item:", addedItem);
    res.status(201).json(addedItem);
  } catch (error) {
    console.error("Error in addItem:", error);
    res.status(500).json({ message: error.message });
  }
};

// dashboardController.js

// Method to update settings
exports.updateSettings = async (req, res) => {
  const userId = req.user._id;
  const newSettings = req.body;

  try {
    const updatedSettings = await DashboardDataHandler.updateUserSettings(userId, newSettings);
    console.log("Updated Settings:", updatedSettings);
    res.status(200).json(updatedSettings);
  } catch (error) {
    console.error("Error in updateSettings:", error);
    res.status(500).json({ message: error.message });
  }
};


// ... other methods ...

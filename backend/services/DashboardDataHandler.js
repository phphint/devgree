// dahsboarddatahandler.js
const User = require('../models/User');

// Check if the array is within the resume subdocument
const isNestedInResume = (arrayName) => {
  const nestedArrays = ['education', 'workExperience', 'skills', 'projects', 'certifications', 'languages']; // Add other nested arrays if needed
  return nestedArrays.includes(arrayName);
};

// Function to edit an item in an array by _id
const editItemById = async (userId, arrayName, itemId, newData) => {
  const user = await User.findById(userId);
  if (!user) throw new Error('User not found');

  const arrayPath = isNestedInResume(arrayName) ? user.resume[arrayName] : user[arrayName];
  const itemIndex = arrayPath.findIndex(item => item._id.toString() === itemId);
  if (itemIndex === -1) throw new Error('Item not found');

  arrayPath[itemIndex] = { ...arrayPath[itemIndex].toObject(), ...newData };
  await user.save();

  return arrayPath[itemIndex];
};

// Function to delete an item in an array by _id
const deleteItemById = async (userId, arrayName, itemId) => {
  const user = await User.findById(userId);
  if (!user) throw new Error('User not found');

  const arrayPath = isNestedInResume(arrayName) ? user.resume[arrayName] : user[arrayName];
  const filteredArray = arrayPath.filter(item => item._id.toString() !== itemId);
  
  if (isNestedInResume(arrayName)) {
      user.resume[arrayName] = filteredArray;
  } else {
      user[arrayName] = filteredArray;
  }
  
  await user.save();
  
  return filteredArray; // return the updated array
};

// Function to add a new item to an array
const addItem = async (userId, arrayName, newItem) => {
  const user = await User.findById(userId);
  if (!user) throw new Error('User not found');

  const arrayPath = isNestedInResume(arrayName) ? user.resume[arrayName] : user[arrayName];
  arrayPath.push(newItem);
  await user.save();

  return newItem; // Or return the entire array, depending on your preference
};


// Function to update user settings
const updateUserSettings = async (userId, newSettings) => {
  const user = await User.findById(userId);
  if (!user) throw new Error('User not found');

  // Update settings fields
  user.settings = { ...user.settings, ...newSettings };
  await user.save();

  return user.settings;
};

 

module.exports = {
  addItem,
  editItemById,
  deleteItemById,
  updateUserSettings
  // ... other functions ...
};

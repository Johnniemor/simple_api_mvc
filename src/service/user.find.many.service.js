const userModel = require("../model/user.model");

// Find Many User Account from MongoDB
const findManyUser = async () => {
  try {
    // Check from isBanned ....💥
    return await userModel.find({ isBanned: false });
  } catch (error) {
    console.error(error);
    throw new Error('Internal Server Error');
  }
};

module.exports = {
  findManyUser,
};
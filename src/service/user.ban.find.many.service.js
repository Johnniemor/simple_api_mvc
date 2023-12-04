const userModel = require("../model/user.model");

const banUserFindMany = async () => {
    try {
      // Check from isBanned ....💥
      return await userModel.find({ isBanned: true });
    } catch (error) {
      console.error(error);
      throw new Error('Internal Server Error');
    }
  };
  
  module.exports = {
    banUserFindMany,
  };
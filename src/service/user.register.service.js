const userModel = require("../model/user.model");
const bcrypt = require('bcrypt');

// Check user already exists Assign username and email... 🔥
const checkExistingUser = async (username, email) => {
    return await userModel.findOne({ $or: [{ username }, { email }] });
};

// Create new user request username , email and password ....🚀
const createUser = async (username, email, password) => {
      // Hash the password
      const hashedPassword = bcrypt.hashSync(password, 10);
    const newUser = new userModel({ username, email, password: hashedPassword });
    return await newUser.save();
};

module.exports = {
    checkExistingUser,
    createUser,
};
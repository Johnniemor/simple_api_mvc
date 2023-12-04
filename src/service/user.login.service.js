const userModel = require("../model/user.model");
const bcrypt = require('bcrypt');

const findUserByUsername = async (username) => {
    return await userModel.findOne({ username });
};

const comparePasswords = (password, hashedPassword) => {
    return bcrypt.compareSync(password, hashedPassword);
};

const updateUserStatusToBanned = async (userId) => {
    return await userModel.findByIdAndUpdate(userId, { isBanned: true });
};

module.exports = {
    findUserByUsername,
    comparePasswords,
    updateUserStatusToBanned,
};
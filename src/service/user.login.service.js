const userModel = require("../model/user.model");

const findUserByUsername = async (username) => {
    return await userModel.findOne({ username });
};

const findUserByPassword = async (password) => {
    return await userModel.findOne({ password });
};

const updateUserStatusToBanned = async (userId) => {
    return await userModel.findByIdAndUpdate(userId, { isBanned: true });
};

module.exports = {
    findUserByUsername,
    findUserByPassword,
    updateUserStatusToBanned,
};
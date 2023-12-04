const userModel = require("../model/user.model");

const findUserByUsername = async (username) => {
    return await userModel.findOne({ username });
};

const findUserByPassword = async (password) => {
    return await userModel.findOne({ password });
};

module.exports = {
    findUserByUsername,
    findUserByPassword,
};
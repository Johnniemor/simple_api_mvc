const userModel = require("../model/user.model");

const checkExistingUser = async (username, email) => {
    return await userModel.findOne({ $or: [{ username }, { email }] });
};

const createUser = async (username, email, password) => {
    const newUser = new userModel({ username, email, password });
    return await newUser.save();
};

module.exports = {
    checkExistingUser,
    createUser,
};
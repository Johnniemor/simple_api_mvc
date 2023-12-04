const userModel = require("../model/user.model");


// Find one user account Assign from User ID...🚀
const findOneUser = async (userId) => {
    try {
        // Check and get user Id...
        return await userModel.findOne({ _id: userId });
    } catch (err) {
        console.error(error);
        throw new Error('Internal Server Error');
    }
}

module.exports = {
    findOneUser,
};
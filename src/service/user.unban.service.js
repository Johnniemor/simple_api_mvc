const userModel = require("../model/user.model");

const unBanUser = async (userId) => {
    try {
        
        // Find one user banned from id ...🚀
        const user = await userModel.findOne({ _id: userId, isBanned: true });

        if (user) {

            // Assign user banned is false [unBan]...🔥
            user.isBanned = false;

            // Save this user (old id) again...
            await user.save();

        } else {
            throw new Error('User not found');
        }
    } catch (err) {
        throw new Error('Internal Server Error');
    }
}

module.exports = {
    unBanUser,
}
const userModel = require("../model/user.model");

const banUser = async (userId) => {
    try{
        const user = await userModel.findOne({ _id: userId, isBanned: false });

        if (user) {
          user.isBanned = true;
          await user.save();
        } else {
          throw new Error('User not found');
        }
    }catch (err){
        console.error('banUser Error:', err);
        throw new Error('Internal Server Error');
    }
}

module.exports = {
    banUser,
}
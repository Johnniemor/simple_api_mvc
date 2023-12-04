const userService = require("../service/user.unban.service");
const mongoose = require('mongoose');


const unBanUser = async (req, res) => {
    try {
        const userId = new mongoose.Types.ObjectId(req.params.userId);
        await userService.unBanUser(userId);
        res.json({ message: 'UnBan User successfully' });
    } catch (err) {
        if (err.message === 'User not found') {
            res.status(404).json({ message: 'User not found' });
        } else {
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }
}

module.exports = {
    unBanUser,
}

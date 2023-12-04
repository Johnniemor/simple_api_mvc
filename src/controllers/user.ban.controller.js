const userService = require("../service/user.ban.service");
const mongoose = require('mongoose');


const banUser = async (req, res) => {
    try {
        const userId = new mongoose.Types.ObjectId(req.params.userId);
        await userService.banUser(userId);
        res.json({ message: 'User banned successfully' });
    } catch (err) {
        console.error('banUser Controller Error:', err);
        if (err.message === 'User not found') {
            res.status(404).json({ message: 'User not found' });
        } else {
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }
}

module.exports = {
    banUser,
}

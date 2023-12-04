const userService = require("../service/user.ban.find.many.service");

// Find Many User Account from MongoDB
const banUserFindMany = async (req, res) => {
    try {
        const users = await userService.banUserFindMany();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    banUserFindMany,
};
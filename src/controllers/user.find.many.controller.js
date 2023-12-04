const userService = require("../service/user.find.many.service");

// Find Many User Account from MongoDB
const findManyUser = async (req, res) => {
    try {
        const users = await userService.findManyUser();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    findManyUser,
};
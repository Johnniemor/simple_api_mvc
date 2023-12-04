const userService = require("../service/user.find.one.service");


const findOneUser = async (req, res) => {
    try {
        const userId = req.params.userId;

        // Ensure that the userId is valid before proceeding
        if (!userId.match(/^[0-9a-fA-F]{24}$/)) {
            return res.status(400).json({ message: 'Invalid user ID' });
        }

        const user = await userService.findOneUser(userId);
        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

module.exports = {
    findOneUser,
};
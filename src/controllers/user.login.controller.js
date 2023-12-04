const userService = require("../service/user.login.service");
const jwt = require('jsonwebtoken');

const loginUser = async (req, res) => {
    try {
        const { username, password } = req.body;

        // Find user account in MongoDB....
        const user = await userService.findUserByUsername(username);

        // Check if user exists and password is correct
        if (user && userService.findUserByPassword(password, user.password)) {

            // Check if the user is banned
            if(user.isBanned == true){
                return res.status(403).json({ message: 'User is banned. Login not allowed.' });
            }

            // Generate JWT token....[user token]🚀
            const token = jwt.sign({ username: user.username, userId: user._id }, 'your-secret-key', {
                // Assign Token expired time
                expiresIn: '1h',
            });
            
            // Assign Response UserID & User Token...🔥
            return res.status(201).json({ userId: user._id ,  Authorization: token });

        } else {
            return res.status(404).json({ message: 'User not found' });
        }
        
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Internal Server Error' });
    }

};

module.exports = {
    loginUser,
};
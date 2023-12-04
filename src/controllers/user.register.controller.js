const userService = require("../service/user.register.service");
const User = require("../model/user.model")

const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Check if username or email already exists
    const existingUser = await userService.checkExistingUser(username, email);

    // If username or email already exists Assign it return status code 400 🔥
    if (existingUser) {
      return res.status(400).json({ message: 'Username or email already exists' });
    }

    // Create a new user
    await userService.createUser(username, email, password);
    return res.json({ message: 'User registered successfully' , username , email , password });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = {
  registerUser,
};
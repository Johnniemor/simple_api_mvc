const express = require("express");
const router = express.Router();
const userRegisterController = require("../controllers/user.register.controller");
const userLoginController = require("../controllers/user.login.controller");

router.post('/register',userRegisterController.registerUser );
router.post('/login', userLoginController.loginUser);


module.exports = router;

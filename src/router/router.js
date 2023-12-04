const express = require("express");
const router = express.Router();
const userRegisterController = require("../controllers/user.register.controller");
const userLoginController = require("../controllers/user.login.controller");
const findManyUserController = require("../controllers/user.find.many.controller");
const findOneUserController = require("../controllers/user.find.one.controller");

router.post('/register',userRegisterController.registerUser );
router.post('/login', userLoginController.loginUser);
router.get('/findManyUser', findManyUserController.findManyUser);
router.get('/findOne/:userId', findOneUserController.findOneUser);


module.exports = router;

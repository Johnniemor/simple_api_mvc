const express = require("express");
const router = express.Router();
const userRegisterController = require("../controllers/user.register.controller");
const userLoginController = require("../controllers/user.login.controller");
const findManyUserController = require("../controllers/user.find.many.controller");
const findOneUserController = require("../controllers/user.find.one.controller");
const banUserController = require("../controllers/user.ban.controller");
const banUserFindManyController = require("../controllers/user.ban.find.many.controller");
const unBanUserController = require("../controllers/user.unban.controller");

router.post('/register',userRegisterController.registerUser );
router.post('/login', userLoginController.loginUser);
router.get('/findManyUser', findManyUserController.findManyUser);
router.get('/findOne/:userId', findOneUserController.findOneUser);
router.delete('/ban/:userId', banUserController.banUser);
router.get('/ban/findMany' , banUserFindManyController.banUserFindMany);
router.patch('/unBan/:userId', unBanUserController.unBanUser);




module.exports = router;

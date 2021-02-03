const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController')
//middleWeares//
const checkuser=require("../middlewares/localsUserCheck")
/*Routes*/

router.get('/',checkuser,userController.register);
router.post("/registro",checkuser,userController.procesoRegister)
router.post("/login",checkuser,userController.procesoLoguin)
router.get("/profile",userController.profile)
router.get("/close",userController.close)


module.exports = router;

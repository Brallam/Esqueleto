const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController')
//middleWeares//
const checkuser=require("../middlewares/localsUserCheck")
/*Routes*/

router.get('/',checkuser,userController.register);
router.post("/registro",checkuser,userController.procesoRegister)
router.post("/login",checkuser,userController.procesoLoguin)


//Perfil y configuraciones
router.get("/profile/:id",userController.profile)
router.post("/edit/:id?",userController.editprofile)

router.get("/close",userController.close)


module.exports = router;

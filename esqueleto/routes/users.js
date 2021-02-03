const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController')
//middleWeares//
const checkuser=require("../middleweares/usersmid")
/*Routes*/

router.get('/',checkuser,userController.register);
router.post("/registro",checkuser,userController.procesoRegister)
router.post("/login",checkuser,userController.procesoLoguin)


module.exports = router;

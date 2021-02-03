const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController')

/*Routes*/

router.get('/',userController.register);
router.post('/registro',userController.procesoRegister)
router.post("/login",userController.procesoLoguin)


module.exports = router;

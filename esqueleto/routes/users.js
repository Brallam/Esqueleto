const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController')

/*Routes*/

router.get('/',userController.register);
router.post('/',userController.procesoRegister)

module.exports = router;

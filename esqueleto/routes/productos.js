const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController')

/*Routes*/

router.get('/',productController.listado);
router.get('/creacionDeProducto',productController.creacionDeProductos);
router.post('/',productController.crearProducto)

module.exports = router;
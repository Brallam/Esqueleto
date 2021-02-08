const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController')

/*Routes*/

router.get('/listadoProductos',productController.listado);
router.get('/creacionDeProducto',productController.creacionDeProductos);
router.post('/crearProducto',productController.crearProducto)

module.exports = router;
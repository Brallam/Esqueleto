const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController')
//Middlewares//
const multer=require("../middlewares/multerproducts")

/*Routes*/

router.get('/listadoProductos',productController.listado);
router.get('/creacionDeProducto',productController.creacionDeProductos);
router.post('/crear',multer.any(),productController.crearProducto)
router.get('/cart',productController.cart)
router.get('/productDetail/:id?',productController.productDetail)
//eliminar//
router.get("/delete/:id?",productController.eliminar)


router.get('/edicionDeProducto/:id',productController.edicionDeProductos);
router.post('/editarProducto/:id',productController.editarProducto)

module.exports = router;
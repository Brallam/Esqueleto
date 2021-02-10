const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController')
//Middlewares//
const multer=require("../middlewares/multerproducts")

/*Routes*/

router.get('/',productController.listado);
//subida//
router.get('/creacionDeProducto',productController.creacionDeProductos);
router.post('/crear',multer.any(),productController.crearProducto)
//eliminar//
router.get("/delete/:id?",productController.eliminar)


module.exports = router;
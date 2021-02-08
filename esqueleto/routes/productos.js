const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController')
//Middlewares//
const multer=require("../middlewares/multerproducts")
const upload = multer;
/*Routes*/

router.get('/',productController.listado);
//subida//
router.get('/creacionDeProducto',upload.array("photos",10),productController.creacionDeProductos);
router.post('/',productController.crearProducto)
//eliminar//
router.post("/delete",productController.eliminar)
module.exports = router;
const db = require('../database/models')

const products = {
    listado: function(req,res) {
        db.productos.findAll()
        .then(function(productosDat){
            return res.render('listadoProductos', {
                productos: productosDat
            }) //muestra información de prueba
        })
    },
    creacionDeProductos: function(req,res) {
        db.productos.findAll()
        .then(function(productosDat){
            return res.render('creacionDeProducto', {
                productos: productosDat
            }) //muestra información de prueba
        })
    },
    crearProducto: function(req,res){
        db.productos.create(
            {
                nombre: req.body.productName.trim(),
                talle: req.body.productTalle.trim(),
                color: req.body.productColor.trim(),
                precio: Number(req.body.productPrecio),
                descripcion: req.body.productDescription.trim(),
                descuento: Number(req.body.productDiscount),
                
            }
        )
            .then(result => {
                console.log(result)
                return res.redirect('/products');
              })
            .catch(errors => {
                console.log(errors)
            })
    },
    edicionDeProductos: function (req, res) {

        let id = db.productos.findByPk(req.params.id)
        let todos = db.productos.findAll()
        Promise.all([id, todos])
            .then(function ([idProd, todosProd]) {
                res.render('edicionDeProducto', {
                    productoEdit: idProd,
                    productos: todosProd
                })
            })
            .catch(errores => {
                console.log(errores)
            })

    },
    editarProducto: function(req,res){
        db.productos.update({
            nombre: req.body.productName.trim(),
            talle: req.body.productTalle.trim(),
            color: req.body.productColor.trim(),
            precio: Number(req.body.productPrecio),
            descuento: Number(req.body.productDiscount),
            descripcion: req.body.productDescription.trim(),
        }, {
            where: {
                id: req.params.id
            }
        })  
        .then(result => {
            console.log(result)
            res.redirect("/products/edicionDeProducto/"+req.params.id)
        })
    }
}

module.exports = products
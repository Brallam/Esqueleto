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
        res.render('creacionDeProducto')
    },
    crearProducto: function(req,res){
        db.productos.create(
            {
                nombre: req.body.productName.trim(),
                talle: req.body.productTalle.trim(),
                color: req.body.productColor.trim(),
                precio: Number(req.body.productPrecio),
                descripcion: req.body.productDescription.trim(),
                image:(req.files[0])?req.files[0].filename:"default-image.png",
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
    eliminar:(req,res)=>{
        db.destroy({where:{id:req.params.id}})
    }
}

module.exports = products
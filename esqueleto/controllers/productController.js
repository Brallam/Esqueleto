const db = require('../database/models')

const products = {
    listado: function(req,res) {
        db.productos.findAll()
        .then(function(productosDat){
            return res.render('listadoProductos', {
                productos: productosDat,
            }) //muestra información de prueba
        })
    },
    //creacion//
    creacionDeProductos: function(req,res) {
        db.productos.findAll()
        .then(function(productosDat){
            let productos=productosDat
            db.usuarios.findAll()
            .then(users=>{
            return res.render('creacionDeProducto', {
                productos: productos,
                users:users
            })
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
                image:(req.files[0])?req.files[0].filename:"default-image.png",
                descuento: Number(req.body.productDiscount),
                
            }
        )
            .then(result => {
                console.log(result)
                return res.redirect('/products/creacionDeProducto');
              })
            .catch(errors => {
                console.log(errors)
            })
    },
    //eliminar 
    eliminar:(req,res)=>{
        db.productos.destroy({where:{id:req.params.id}})
        res.redirect("/products/creacionDeProducto") },

    //edicion
    edicionDeProductos: function (req, res) {

        let id = db.productos.findByPk(req.params.id)
        let todos = db.productos.findAll()
        let user= db.usuarios.findAll()
        Promise.all([id,todos,user])
            .then(function ([id, todos,user]) {
                res.render('edicionDeProducto', {
                    productoEdit: id,
                    productos: todos,
                    user:user
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
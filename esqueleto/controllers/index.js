const users = require("./userController");

const db = require('../database/models')
module.exports={
    index:((req, res, next)=> {
        db.productos.findAll()
        .then((productos)=>{
            res.render('index',{
                title:"Home",
                productos:productos,
                users:req.session.user
            })
        })
      })
}
const db = require('../database/models')
const bcrypt = require('bcrypt')

const users = {
    register: function(req, res) {
        res.render('loginRegistro');
      },
    procesoRegister: function(req,res){
      db.usuarios.create(
        {
            nombre: req.body.nameregister.trim(),
            apellido: req.body.lnameregister.trim(),
            email: req.body.emailregister.trim(),
            contraseña: bcrypt.hashSync(req.body.passregister.trim(), 10),
            
        }
    )
        .then(result => {
            console.log(result)
            return res.redirect('/');
          })
        .catch(errors => {
            console.log(errors)
        })
},
    procesoLoguin:(req,res)=>{

      db.usuarios.findOne({
        where:{
            email:req.body.emaillogin
        }
    }).then((usuario)=>{
      req.session.user={
        id:usuario.id,
        name:usuario.nombre,
        apellido:usuario.apellido,
        email:usuario.email,
        dni:usuario.dni,
        telefono:usuario.telefono,
      }
      console.log(req.session.user)
      console.log(req.session.user.name)
      res.locals.user = req.session.user
      console.log(res.locals.user.email);

      return res.redirect('/')
    })

  }
}



module.exports = users;
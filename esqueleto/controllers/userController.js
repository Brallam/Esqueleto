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
      let rem=req.body.checkboxlogin
      if(rem=="on"){
        res.cookie("usercookie",req.session.user.email,{maxAge:3.154e+10})
       }
      res.locals.user = req.session.user
      return res.redirect('/')
    })

  },
  close:(req,res)=>{
    req.session.destroy();
    if(req.cookies.usercookie){
      res.cookie("usercookie","",{maxAge:-1})
    }
    res.redirect("/")
  },
  profile:(req,res)=>{
    res.render('profile')
  }
}



module.exports = users;
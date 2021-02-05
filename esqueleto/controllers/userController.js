const db = require('../database/models')
const bcrypt = require('bcrypt');


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
  //Perfil y configuraciones
  profile:(req,res)=>{
    console.log(req.session.user)
    db.usuarios.findAll({
      where:{id:req.params.id}, 
    })
    
    .then((m)=>{
      if(m.lenght!=0){
        res.render("profile",{
          title:"Perfil",
          userP:m[0],
          user:req.session.user
        })
      }
      else{ 
        res.render("/")
      }
    })
  
  },
  editprofile:(req,res,next)=>{
    let ids=req.params.id;
    console.log(ids)
    db.usuarios.findOne({where:{id:ids}})
    .then((newuser)=>{
      let nuevouser={
        nombre: req.body.nameedit.trim(),
        apellido: req.body.lnameedit.trim(),
        dni:req.body.dniedit,
        telefono:req.body.phoneedit,
      }
      req.session.user.name= req.body.nameedit.trim()
      db.usuarios.update(nuevouser, {where: {id:ids}})
      res.redirect('/users/profile/' + ids)
      })
  }

}



module.exports = users;
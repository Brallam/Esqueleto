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
} 
}

module.exports = users
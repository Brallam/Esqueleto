const users = require("./userController");

const db = require('../database/models')
module.exports={
    index:((req, res, next)=> {
        res.render('index',{
            title:"Home",
            users:req.session.user
        });
      })
}
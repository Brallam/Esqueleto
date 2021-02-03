module.exports = (sequelize, dataTypes) => {

    let alias = "usuarios"

    let cols =  {
        id : {
            type : dataTypes.INTEGER(11).UNSIGNED,
            autoIncrement : true,
            allowNull : false,
            primaryKey : true
        },
        nombre:{
            type:dataTypes.STRING(70),
            allowNull: false
        },
        apellido:{
            type:dataTypes.STRING(45),
            allowNull: false
        },
        email:{
            type:dataTypes.STRING(45),
            allowNull: false
        },
        contraseña:{
            type:dataTypes.STRING(300),
            allowNull: false
        },
        dni:{
            type:dataTypes.INTEGER(11),
            allowNull: true
        },
        telefono:{
            type:dataTypes.INTEGER(20),
            allowNull: true
        }
    }

    let config = {
        tableName: "usuarios",
        timestamps:false,
        underscored:true
    }

    
    const usuario = sequelize.define(alias,cols,config);

    return usuario
}
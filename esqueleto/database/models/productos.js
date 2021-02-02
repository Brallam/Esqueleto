module.exports = (sequelize, dataTypes) => {

    let alias = "productos"

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
        talle:{
            type:dataTypes.STRING(45),
            allowNull:false
        },
        color:{
            type:dataTypes.STRING(45),
            allowNull:true
        },
        precio:{
            type:dataTypes.INTEGER(11),
            allowNull:false
        },
        descripcion:{
            type:dataTypes.STRING(200),
            allowNull:true
        },
        descuento:{
            type:dataTypes.INTEGER(11),
            allowNull:true
        }
    }

    let config = {
        tableName: "productos",
        timestamps:false,
        underscored:true
    }

    
    const producto = sequelize.define(alias,cols,config);

    return producto
}
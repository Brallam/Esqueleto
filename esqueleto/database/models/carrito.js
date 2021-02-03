module.exports = (sequelize, dataTypes) => {

    let alias = "carritos"

    let cols =  {
        id : {
            type : dataTypes.INTEGER(11).UNSIGNED,
            autoIncrement : true,
            allowNull : false,
            primaryKey : true
        },
        userid:{
            type:dataTypes.INTEGER(11),
            allowNull:false
        },
        productid:{
            type:dataTypes.INTEGER(11),
            allowNull:false
        },
        cantidad:{
            type:dataTypes.INTEGER(11),
            allowNull:false
        },
    }

    let config = {
        tableName: "carritos",
        timestamps:false,
        underscored:true
    }

    
    const carrito = sequelize.define(alias,cols,config);

    return carrito
}
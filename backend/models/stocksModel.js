const { DataTypes } = require("sequelize");
const sequelize = require("../config/db"); 

const Stock = sequelize.define(
    "Stock",
    {
        userId: {
            type: DataTypes.STRING,
            allowNull: false
            
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate:{
                isInt:{
                    msg : "Quantity must be an integer"
                },
                min:{
                    args: 1,
                    msg: "Quantity must be at least 1"
                },

            }
        },
        ticker:{
            type : DataTypes.STRING,
            allowNull : false
            },
        date: {
            type : DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },
        price : {
            type : DataTypes.FLOAT,

        }
    }
)
module.exports = Stock
const {Sequelize,DataTypes} = require('sequelize')
const sequelize = require("../config/db");

const User = sequelize.define(
    "User",
    {
        username:{
            type : DataTypes.STRING,
            allowNull : false,
            validate: {
                len:{
                    args: [4,15],
                    msg: "Username must be in between 4 to 15 characters"
                }
            },
            lowercase:true,
        },
        password:{
            type : DataTypes.STRING,
            allowNull : false, 
        },
        balance:{
            type: DataTypes.FLOAT,
            allowNull: false,
            defaultValue: 100000,
            validate: {
                isNumeric:{
                    msg: "Balance must be numeric"
                }
            }
        }

    },{
        timestamps: true,
    }
)
module.exports = User;
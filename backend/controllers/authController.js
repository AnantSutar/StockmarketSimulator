const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.registerUser = async (req,res) =>{
    try {
        const {username,password} = req.body;
        if(!username || !password){
            return res.status(200).json({
                status: "fail",
                message: "username or password not provided"
            })
        }
        if (password.length < 6 || password.length >20){
            return res.status(200).json({
                status:"fail",
                message:"password doesnt follow criteria"
            })
        }
    
    } catch (error) {
        
    }
}

exports.loginUser = async (req,res) =>{

}
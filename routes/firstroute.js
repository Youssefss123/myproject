const express=require('express')
const { model } = require('mongoose')
const frouter=express.Router()
frouter.get('/',(req,res)=>{
    res.render('index')
})


module.exports=frouter
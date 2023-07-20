 if(process.env.NODE_ENV !=='production'){
    require('dotenv').config()
 } 
 
 
 const express=require('express')
 const app=express()
 const expressejslaayout=require('express-ejs-layouts')
const frouter = require('./routes/firstroute')
const { default: mongoose } = require('mongoose')
 

 app.use(expressejslaayout)
 app.set('view engine','ejs')
 app.set('views',__dirname+'/views')
 app.set('layout','layouts/layout')
 app.use(express.static('public'))


app.use('/',frouter)

mongoose.connect(process.env.DATABASE_URL,{  useNewUrlParser: true,
    useUnifiedTopology: true})
    const db=mongoose.connection

    db.on('error',(error)=>console.log(error))
    db.once('open',()=>console.log('connected succefully'))

 app.listen(3000)
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const apiRouter = require('./routes')

const {PORT} = require('./config/server.config');
const errorHandler = require('./utils/ErrorHandler');
const { connect } = require('mongoose');
const connectionToDB = require('./config/db.config');

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.text())

//if any request comes and route start with /api then map it to following func
app.use('/api' , apiRouter);

app.get("/ping" , (req , res)=>{
    return res.json({message:'Problem service alive'})
})

//last middleware if any error comes
app.use(errorHandler);

app.listen(PORT , async ()=>{
    console.log("Server started at " , PORT);
    await connectionToDB()
    console.log('Successfully connected to DB');
})


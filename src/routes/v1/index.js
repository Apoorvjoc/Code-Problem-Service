const express = require('express')

const problemRouter = require('./problems.routes')

const v1Router = express.Router();

//if any request comes and route continues with /problems then map it to following func
v1Router.use("/problems" , problemRouter)

module.exports = v1Router;
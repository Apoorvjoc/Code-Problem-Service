const { statusCodes } = require('http-status-codes')
const NotImplemented = require('../errors/notImplemented.error')

function addProblem(req , res , next){
    try {
        throw new NotImplemented("addProblem")
        // throw means we are sending err from this try to catch(error)
    } catch (error) {
        next(error) 
        // here error is of type BaseError b/c NotImplemented is extended from BaseError only .
        // so this next will call the last middleware in main index.js file and that middleware will call errorHaldler class .
        // errorHaldler class which is in utils .
        // And that util class is resposible for the json response to client .
    }
}

function getProblem(req , res , next){
    try {
        throw new NotImplemented("getProblem")
    } catch (error) {
        next(error)
    }
}

function getProblems(req , res , next){
    try {
        throw new NotImplemented("getProblems")
    } catch (error) {
        next(error)
    }
}

function deleteProblem(req , res , next){
    try {
        throw new NotImplemented("deleteProblem")
    } catch (error) {
        next(error)
    }
}

function updateProblem(req , res , next){
    try {
        throw new NotImplemented("updateProblem")
    } catch (error) {
        next(error)
    }
}

function pingProblemController(req , res , next){
    return res.json({message:'Problem controller service alive'})
}

module.exports={
    addProblem,
    getProblem,
    getProblems,
    deleteProblem,
    updateProblem,
    pingProblemController
}
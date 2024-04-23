const { statusCodes, StatusCodes } = require('http-status-codes')
const NotImplemented = require('../errors/notImplemented.error')
const { ProblemService } = require('../services');
const { ProblemRepository } = require('../repositories');
const logger = require('../config/logger.config');

const problemService = new ProblemService( new ProblemRepository())

async function addProblem(req , res , next){
    try {
        const newProblem = await problemService.createProblem(req.body)
        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: 'Successfully created a new problem',
            error: {},
            data : newProblem 
        })
        // throw means we are sending err from this try to catch(error)
    } catch (error) {
        next(error) 
        // here error is of type BaseError b/c NotImplemented is extended from BaseError only .
        // so this next will call the last middleware in main index.js file and that middleware will call errorHaldler class .
        // errorHaldler class which is in utils .
        // And that util class is resposible for the json response to client .
    }
}

async function getProblem(req , res , next){
    try {
        const problem = await problemService.getProblemById(req.params.id)
        return res.status(StatusCodes.OK).json({
            success: true,
            error : {},
            message: "Successfully fetched problem",
            data: problem
        })
    } catch (error) {
        next(error)
    }
}

async function getProblems(req , res , next){
    try {
        const problems = await problemService.getAllProblems();
        return res.status(StatusCodes.OK).json({
            success: true,
            message: 'Successfully fetched problems',
            error: {},
            data : problems 
        })
    } catch (error) {
        next(error)
    }
}

async function deleteProblem(req , res , next){
    try {
        logger.info(` Deleting for ID : ${req.params.id}`)
        return await problemService.deleteProblemById(req.params.id)
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
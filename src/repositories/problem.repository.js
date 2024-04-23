const logger = require('../config/logger.config');
const NotFoundError = require('../errors/NotFoundError');
const {Problem} = require('../models')


class ProblemRepository{

    async createProblem(problemData){
        try {
            console.log("Problem data in repo " , problemData);
            const Problemres = await Problem.create({
                title: problemData.title,
                description : problemData.description,
                testCases: (problemData.testCases) ? problemData.testCases : []
            })
            return Problemres;
        } catch (error) {
            console.log("Error at creating problem : Repo");
            console.log(error);
            throw error;
        }
    }

    async getAllProblems(){
        try {
            console.log("Getting all problems");
            const problems = await Problem.find({})
            return problems;
        } catch (error) {
            console.log("Error at getting problems : Repo");
            console.log(error);
            throw error;
        }
    }

    async getProblemById(id){
        try {
            console.log("Getting problem by id for id : " , id);
            const problem = await Problem.findById(id);
            console.log("Problem " , problem);
            return problem;
        } catch (error) {
            console.log("Error at getting problem by id : Repo");
            console.log(error);
            throw error;
        }
    }

    async deleteProblemById(id) {
        try {
            const deleteProblem = await Problem.findByIdAndDelete(id);
            if(!deleteProblem){
                logger.error(`Problem with id: ${id}`)
                throw new NotFoundError("problem " , id);
            }
            return deleteProblem
        } catch (error) {
            logger.error(`Problem with id: ${error.message}`)
            throw error
        }
    }

}

module.exports = ProblemRepository;
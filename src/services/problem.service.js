const sanitizeMarkdownContent = require('../utils/markdownSeniriazer')
const NotFoundError = require('../errors/NotFoundError');
const logger = require('../config/logger.config');


class ProblemService {

    constructor(problemRepository){
        this.problemRepository = problemRepository;
    }

    async createProblem(problemData){
        try {
            // 1) Sanitize the markdown for description
            problemData.description = sanitizeMarkdownContent(problemData.description);

            const problem = this.problemRepository.createProblem(problemData);

            return problem;
        } catch (error) {
            console.log("Error on creating problem : service");
            console.log(error);
            throw error
            
        }
    }

    async getAllProblems(){
        try {
            const problems = this.problemRepository.getAllProblems();
            return problems;
        } catch (error) {
            console.log("Error at creating problem : Service");
            console.log(error);
            throw error;
        }   
    }

    async getProblemById(id){
        try {
            logger.info(`Getting user details for ID : ${id}`)
            const problem = this.problemRepository.getProblemById(id);
            if(!problem){
                throw new NotFoundError("Problem" , id)
            }
            return problem;
        } catch (error) {
            logger.error(`Error at getting problem by id : ProblemService`)
            console.log(error);
            throw error;
        }   
    }

    async deleteProblemById(id){
        try {
            logger.info(`Deleting user details for ID : ${id}`)
            const problem = this.problemRepository.deleteProblemById(id);
            if(!problem){
                throw new NotFoundError("Problem" , id)
            }
            return problem;
        } catch (error) {
            logger.error(`Error at getting problem by id : ProblemService`)
            console.log(error);
            throw error;
        }
    }

}

module.exports = ProblemService;
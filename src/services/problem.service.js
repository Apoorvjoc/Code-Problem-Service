const sanitizeMarkdownContent = require('../utils/markdownSeniriazer')

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

}

module.exports = ProblemService;
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

}

module.exports = ProblemRepository;
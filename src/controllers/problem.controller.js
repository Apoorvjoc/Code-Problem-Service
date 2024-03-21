function addProblem(req , res){

}

function getProblem(req , res){
    
}

function getProblems(req , res){
    
}

function deleteProblem(req , res){
    
}

function updateProblem(req , res){
    
}

function pingProblemController(req , res){
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
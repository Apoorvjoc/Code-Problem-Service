const mongoose = require('mongoose')

const prodblemSchema = mongoose.Schema({
    title:{
        type : String,
        required : [true , 'Title cannot be empty']
    },
    description: {
        type : String,
        required : [true , 'Description cannot be empty']
    },
    difficulty: {
        type: String,
        enum: ['easy' , 'medium' , 'hard'],
        required: [true , 'Difficulty cannot be empty'],
        default: 'easy'
    },
    testCases: [
        {
            input:{
                type: String,
                required : [true , 'Input for testcases cannot be empty']
            },
            output: {
                type: String,
                required : [true , 'Input for testcases cannot be empty']
            }
        }
    ],
    editorial:{
        type: String
    }
})

const Problem = mongoose.model('Problem' , prodblemSchema)

// variable name = (schema_name , schema_name ) 

module.exports = Problem;
const BaseError = require("./base.error");
const {StatusCodes} = require('http-status-codes');

class InternalServerError extends  BaseError{
    constructor(propertyName , details){
        super("BadRequest" , StatusCodes.INTERNAL_SERVER_ERROR , `Something Went Wrong !!` , details)
    }
}

module.exports = InternalServerError;
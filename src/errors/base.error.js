class BaseError extends Error{
    constructor(name , statusCode  , description , details){
        //name : type of error 
        super(description);
        this.name = name;
        this.statusCode = statusCode
        this.details = details;
    }
    
}

module.exports = BaseError;
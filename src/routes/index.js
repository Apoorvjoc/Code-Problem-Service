const express = require('express');

const v1Router = require('./v1');

const apiRouter = express.Router();

//if any request comes and route continues with /v1 then we map it to following func
apiRouter.use('/v1' , v1Router);


module.exports = apiRouter;
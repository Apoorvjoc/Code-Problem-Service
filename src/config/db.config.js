const mongoose = require('mongoose')
const { ATLAS_DB_URL, NODE_ENV } = require('./server.config')

async function connectionToDB(){

    try {
       if(NODE_ENV === 'dev'){
        await mongoose.connect(ATLAS_DB_URL)
       }else{
        console.log("Not prod env..");
       }
    } catch (error) {
        console.log('Unable to connect to DB');
        console.log(error);
    }

}

module.exports = connectionToDB;
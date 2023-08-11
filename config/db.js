const mongoose = require('mongoose');

async function connectDatabase() {
    try{
        await mongoose.connect('mongodb+srv://annugupta8512:annu%408512@clusteranu.2ad3iyv.mongodb.net/avidushotel?appName=mongosh+1.8.0')

        console.log('Connected to DB')

    }
    catch(e){
        console.log("error is connnection",e);
    }
    
}

module.exports = {connectDatabase}
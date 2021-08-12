const express = require('express')
const app = express();
//const testModels = require('./models/testModels')
const mongoose = require('mongoose');
const testRoutes = require('./routes/testRoutes')


mongoose.connect('mongodb://localhost/Mytest')
    .then(()=> console.log('connected to db'))
    .catch(err => console.log('errro connect in db',err))




app.use('/',testRoutes)

const port = process.env.port || 3000;

app.listen(port, () => {console.log(`port no is ${port}`)}); 




















    // const testSchema = new mongoose.Schema({
    //     name : {
    //         type: String,
    //         default : true,
    //         minSize : 5,
    //         maxSize : 50
    //     },
    
    //     isSubscribed : {
    //         type: Boolean,
    //         default : true
    //     },
    
    //     number:{
    //         type : String
            
    //     },
    
    //     date:{
    //         type : Date,
    //         default : Date.now
    //     }
    //     }
    // )
    
    
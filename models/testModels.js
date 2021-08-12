const Joi = require('joi');
const mongoose = require('mongoose');

//const testSchema = new mongoose.Schema
//const Test = mongoose.model('Test', testSchema)
//these 2 line comes in this 8th single line 

const Test = mongoose.model("Test", new mongoose.Schema({

    name : {
        type: String,
        default : true,
        minSize : 5,
        maxSize : 50
    },

    isSubscribed : {
        type: Boolean,
        default : true
    },

    number:{
        type : String
        
    },

    date:{
        type : Date,
        default : Date.now
    }

}))
  
exports.Test = Test;



// function validateTest() {
//     const schema = {
//       name: Joi.string().min(5).max(50).required(),
//       isSubscribed: Joi.boolean(),
//       number: Joi.string().min(5).max(50).required()
      
//     };
  
//     return Joi.validate(test,schema);
    
//   }

//   const schema = Joi.object({ name: Joi.string() .min(5).max(50) .required().name(),
// isSubscribed: Joi.string() .min(5).max(50) .required() .isSubscribed(),
// number: Joi.string() .min(6) .number() });

// const validateTest = schema.validate(req.body);
// res.send(validateTest);
// }
 
//   exports.testSchema = testSchema;
 
//   exports.validate = validateTest;

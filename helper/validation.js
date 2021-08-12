const Joi = require('joi'); 
const authSchema = Joi.object({

        name: Joi.string() .min(5).max(50) .required(),
        isSubscribed: Joi.string() .min(5).max(50) .required(),
        number: Joi.string()
   
        
        
});




module.export = authSchema;
 

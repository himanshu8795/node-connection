const {Test,validate} = require("../models/testModels");
const authSchema = require ('../helper/validation')
const express = require("express");
const router = express.Router();

router.use(express.json())


router.get("/",  async (req, res) => {
  const tests = await Test.find()
  res.send(tests);

});


//to upload data in db
router.post("/",  async (req, res) => {

  try{
    const{name,isSubscribed,number} = req.body;
    const result = await authSchema.validateAsync(req.body);
    console.log(result);
  
    let test = new Test({
      name: req.body.name,
      isSubscribed: req.body.isSubscribed,
      number: req.body.number
    });
    const test = new Test({name,isSubscribed,number})
    test = await test.save();
  
    res.send(test);
  }
  catch(err){
    console.error('error',err)
  }
  });
  


//for update test 
  router.put("/:id", async (req, res) => {
    // const { error } = validate(req.body);
    // if (error) return res.status(400).send(error.details[0].message);
  
    const test = await Test.findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.name,
        isSubscribed: req.body.isSubscribed,
        number: req.body.number
      },
      { new: true }
    );
  
    if (!test)
      return res
        .status(404)
        .send("The customer with the given ID was not found.");
  
    res.send(test);
  });

  router.delete("/:id", async (req, res)=>{
    const test = await Test.findByIdAndRemove(req.params.id);
    if (!test)
    return res
      .status(404)
      .send("The customer with the given ID was not found.");

  res.send(test);
  })
// get test by id
  router.get("/:id", async (req, res) => {
    const test = await Test.findById(req.params.id);
  
    if (!test)
      return res
        .status(404)
        .send("The customer with the given ID was not found.");
  
    res.send(test);
  });



module.exports = router; 


















// const Test = mongoose.model('Test', testSchema)
    
//       async function createTest(){
//         const test = new Test({
//             name: 'Himanshu12345 don',
//             isSubscribed : true,
//             number: 8811000088
//         })
//         const result = await test.save()
//         console.log(result);
//     }
//     createTest();


//require packages
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


//connect mongo client, setUp body-parser
const app = express();
mongoose.connect("mongodb+srv://admin-harsh:Test123@cluster0.8wdgx.mongodb.net/sepsisAppDB", {useNewUrlParser : true, useUnifiedTopology: true, useFindAndModify: false });
// mongoose.connect('mongodb://localhost/sepsisAppDB', {useNewUrlParser: true, useUnifiedTopology: true });
app.use(bodyParser.urlencoded({extended: true}));



//define schemas and models for hospital and patient
const patientSchema = {
  name:{
    type: String,
    required: [true, "User Name Required"]
  } ,
  address:{
    type: String,
    required: [true, "User Address Required"]
  },
  age: Number,
  mobile: {
    type: Number,
    required: [true, "User Number Required"]
  },
  email:{
    type: String,
    required: [true, "User Email Required!"]
  }
};
// const patientSchema = {
//   name: String,
//   address: String,
//   age: Number,
//   mobile: Number,
//   email: String
// };

const hospitalSchema  = {
  name:{
    type: String,
    required: true
  },
  email:{
    type: String,
    required: true
  },
  password:{
    type: String,
    required : true
  },
  patients: [patientSchema]
};

const Hospital = mongoose.model("Hospital", hospitalSchema);
const Patient = mongoose.model("Patient", patientSchema);


app.get("/patients", function(req,res){
  console.log("Get Request Made.");
  Patient.find(function(err, patientList){
    if(!err){
      res.send(patientList);
    }else{
      res.send(err);
    }
  })
});






//Post Methods
app.post("/registerPatient", function(req,res){
  const patientName = req.body.name;
  const patientAddress = req.body.address;
  const patientEmail = req.body.email;
  const patientAge = req.body.age;
  const patientMobile = req.body.mobile;

  // console.log(req.body);


  Patient.findOne({email: patientEmail}, function(err, patient){
    if(patient){
      console.log("Sorry, patient with same email already exits, Try again with another email");
      res.json({message : "Already Present"});
    }else{
      console.log("Successfully added patient.");
      const newPatient = new Patient({
        name : patientName,
        address : patientAddress,
        age: patientAge,
        mobile : patientMobile,
        email : patientEmail
      });
      newPatient.save(function(err){
        if(!err){
           res.json({message : "Successfully Added Patient"});
        }else{
          res.send(err);
        }
      });
    }
  });
});

app.post("/registerHospital", function(req,res){

});

app.post("/predictResult", function(req,res){

});


app.listen(process.env.PORT || 3000, function(){
  console.log("Successfully started server at port 3000");
});

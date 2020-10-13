const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const patientSchema = new Schema({
  patienID:{
    type: Schema.Types.ObjectID,
    ref: 'Student',
  },
  name:{
    type: String,
    required: [true, "User Name Required"]
  } ,
  address:{
    type: String,
    required: [true, "User Address Required"]
  },
  age: {
    type : Number,
  },
  mobile: {
    type: Number,
    required: [true, "User Number Required"]
  },
  email:{
    type: String,
    required: [true, "User Email Required!"]
  },

  features:[
    {
      breathrate:{
        type:Number
      },
      temp:{
        type:Number
      },
      etco2:{
        type:Number
      },
      hr:{
        //heart rate
        type:Number
      },
      sbp:{
        //Spontaneous bacterial peritonitis
        type:Number
      },
      map:{
        //mean arterial pressure.
        type:Number
      },
      dbp:{
        //vitamin D-binding protein.
        type:Number
      },
      gender:{
        type: String
      },
      iculus:{
        type:Number
      }
    }
  ]
});



exports.Patient = mongoose.model('Patient', patientSchema);
exports.patientSchema = patientSchema;

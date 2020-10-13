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
      heartbeat:{
        type:Number
      },
      breathrate:{
        type:Number
      },
      temp:{
        type:Number
      },
      etco2:{
        type:Number
      }
    }
  ]
});



exports.Patient = mongoose.model('Patient', patientSchema);
exports.patientSchema = patientSchema;

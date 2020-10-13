const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const patient = require('./patient');

const Schema = mongoose.Schema;

const hospitalSchema  = new Schema({
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
  patients: [patient.patientSchema]
});


exports.Hospital = mongoose.model('Hospital', hospitalSchema);

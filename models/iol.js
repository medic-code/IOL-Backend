const mongoose = require('mongoose')
const mongooseValidator = require('mongoose-unique-validator')

const iolSchema = new mongoose.Schema({
  lens: {
    type: String,

  },material: {
    type: String,
 
  },opmaterial: {
    type: String,
 
  },hapmaterial: {
    type: String,
 
  },design: {
    type: String,
    
  },range: {
    type: String,
 
  },steps: {
    type: String,

  },opticdia: {
    type: String,

  },length: {
    type: String,
 
  },haptic: {
    type: String,
  
  },
  nominal: {
    type: String,
  },
  haigis: {
    type: String,

  },
  hoffer: {
    type: String,

  },
  holladay: {
    type: String,
  
  },
  srkt: {
    type: String,

  },
  srk2: {
    type:String,
  
  },link: {
    type:String,
  
  }, barret: {
    type: String
  },cartridge: {
    type: String
  }, inyector: {
    type: String
  }
})

iolSchema.set('toJSON', {
  transform: (document,returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id
    delete returnedObject.__v
  }
})

mongoose.plugin(mongooseValidator);

module.exports = mongoose.model('iol',iolSchema)
const mongoose = require('mongoose');

const viscoSchema = new mongoose.Schema({
  comp: {
    type: String
  },
  prop: {
    type: String 
  },
  brand: {
    type:String
  }

})

viscoSchema.set('toJSON', {
  transform: (document,returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports =  mongoose.model('visco', viscoSchema)
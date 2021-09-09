const iolRouter = require('express').Router();
const iolModel = require('../models/iol');

iolRouter.get('/', (request,response) => {
  const {iol} = request.query;
  iolModel.find({}).then(data => {
    
    if (iol) {
      let results = data.filter(r => r.iol.includes(iol))
      response.json(results.map(databits => databits.toJSON()))
    }
    response.json(data.map(databit => databit.toJSON()))
  }).catch((error) => console.log(error));
})

iolRouter.post('/', (request,response,next) => {
  const body = request.body;
  console.log(body);
  const newEntry = new iolModel(body) 
  newEntry.save()
    .then(savedEntry => {
      response.json(savedEntry);
    
    })
    .catch(error => next(error))
})



module.exports = iolRouter;
const iolRouter = require('express').Router();
const iolModel = require('../models/iol');

iolRouter.get('/', (request,response) => {
  const {iol} = request.query;
  iolModel.find({}).then(data => {
    
    if (iol) {
      let results = data.filter(r => r.lens.includes(iol))
      return response.json(results)
    }
    response.json(data)
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

  response.redirect(301, '/index.html');
})



module.exports = iolRouter;
const viscoModel = require('../models/visco');
const viscoRouter = require('express').Router();

viscoRouter.get('/', (request,response,next) => {
  viscoModel.find({}).then(data => {
      response.json(data);
    })
    .catch(error => next(error));
})

viscoRouter.post('/', (request,response,next) => {
  const body = request.body;
  const newEntry = new viscoModel(body)
   newEntry
    .save()
    .then(saved =>{
      response.json(saved)
    })
    .catch(error => next(error))


})

module.exports = viscoRouter;

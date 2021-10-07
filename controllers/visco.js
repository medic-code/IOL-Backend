const viscoModel = require('../models/visco');
const viscoRouter = require('express').Router();

viscoRouter.get('/', async (request,response) => {
  let results = viscoModel.find({})
  response.json(results);
})

viscoRouter.post('/', async (request,response) => {
  const body = request.body;
  const newEntry = new viscoModel(body)
  newEntry.save()
  response.redirect(301,'/visco.html')
})

module.exports = viscoRouter;

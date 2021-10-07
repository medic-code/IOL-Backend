const iolRouter = require('express').Router();
const iolModel = require('../models/iol');


iolRouter.get('/', async (request,response) => {
  const {iol} = request.query;
  let results = iolModel.find({})
  if (iol) {
      let queryResult = results.filter(r => r.lens.includes(iol))
      return response.json(queryResult)
    }
    response.json(data)
})

iolRouter.post('/', async (request,response) => {
  const body = request.body;
  const newEntry = new iolModel(body) 
  newEntry.save()
  response.redirect(301, '/index.html');
})

module.exports = iolRouter;
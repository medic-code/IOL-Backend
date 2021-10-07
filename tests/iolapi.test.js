const supertest = require('supertest');
const mongoose = require('mongoose');
const helper = require('./testhelper');
const app = require('../app');
const api = supertest(app);

const Iol = require('../models/iol');

beforeEach(async () => {
  await Iol.deleteMany({});
  await Iol.insertMany(helper.initialLens);
})

describe('when there is initially some lens saved',() => {
  test('lens are returned as json', async () => {
    await api.
     get('/api/iol')
     .expect(200)
     .expect('Content-Type',/application\/json/)
  })

  test('All lens are returned', async () => {
    const response = await api.get('/api/iol');
    expect(response.body).toHaveLength(helper.initialLens.length);
  })
  afterAll(() => {
    mongoose.connection.close()
  })
  
})


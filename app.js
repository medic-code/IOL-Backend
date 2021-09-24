const config = require('./utils/config');
const express = require('express');
const cors = require('cors');
const middleware = require('./utils/middleware')
const multer = require('multer');
const app = express();
const upload = multer();
const iolRouter = require('./controllers/iol');
const viscoRouter = require('./controllers/visco');
const mongoose = require('mongoose')
const logger = require('./utils/logger');


mongoose.connect(config.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  
}).then(() => {
  logger.info(`Connected to MongoDB`);
}).catch((error) => {
  logger.error(`Error connecting to MongoDB:`, error.message);
})


app.use(cors())
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(upload.array());

app.use(middleware.requestLogger);

app.use('/api/iol', iolRouter);
app.use('/api/visco', viscoRouter);

app.use(middleware.unknownEndPoint);


module.exports = app;
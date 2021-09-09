const unknownEndPoint = (request,response) => {
  return response.status(400).send({'error':'Unknown End Point'})
}

const requestLogger = (request,response,next) => {
  console.log(`Method: `,request.method);
  console.log(`Path: `, request.path);
  console.log(`Body: `, request.body);
  console.log(`---`)
  next();
}

module.exports = {
  unknownEndPoint,
  requestLogger
}
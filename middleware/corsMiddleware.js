const allowedOrigins = require("../config/allowedOrigin");

const corsOptionsMiddleware = (req, callback)=>{
   const origin = req.header('Origin');
  if (allowedOrigins.includes(origin)) {
    const allowedMethods = ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'];

    callback(null, {
      origin: true, 
      methods: allowedMethods.join(','),
      credentials: true,
      optionsSuccessStatus: 204, 
    });
  } else {
    callback(new Error('Not allowed by CORS')); 
  }
}


module.exports = corsOptionsMiddleware
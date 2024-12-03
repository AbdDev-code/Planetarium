// importent
const express = require("express")
const dotenv = require('dotenv')
const colors = require('colors')
const morgan = require('morgan')
const connectDB = require('./config/db')
const cors = require('cors')
const errorHandle = require('./middlewares/error')
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const path = require("path")
// App fail
const app = express();
// cors
app.use(cors()) 
// .env
dotenv.config()

// Body parser 
app.use(express.json())
app.use(express.urlencoded({extended:false}))
// MongoDb server
connectDB()
// Routes

// Swagger docsni sozlash
const swaggerOptions = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Stars',
        version: '1.0.0',
        description: 'Stars API ',
      },
    },
    apis: ['./routes/*.js'], // Router fayllarini ko'rsating
  };
  
  // Swagger docsni yaratish
  const swaggerSpec = swaggerJsdoc(swaggerOptions);
  // upload img
  // Swagger UI'ni sozlash
app.use('/api-docs/', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use("/stars/", require('./routes/stars.routes')) 
app.use("/planets/", require('./routes/planets.routes')) 
// Error
app.use(errorHandle)
// Listen
const PORT = process.env.PORT || 3000;
app.listen(PORT,(err)=>{
    if(err) {
        console.log(`Xatolik serverga ${err}`.bgRed)
    }
    console.log(`Eshityapman baqirma ${PORT}`.bgBlue)
})
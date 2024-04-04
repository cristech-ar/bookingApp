const cors = require('cors'),
  express = require('express'),
  connectDB = require('./db/db.js'),
  app = express(),
  swaggerJsDoc = require('swagger-jsdoc'),
  swaggerUi = require('swagger-ui-express'),
  PORT = process.env.PORT || 3000;

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Booking API',
      version: '1.0.0',
      description: 'Booking API Information',
    },
    servers: [
      {
        url: `http://localhost:${PORT}`,
      },
    ],
  },
  apis: ['./routes/*.js'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/explorer', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(express.json());
app.use(cors({ credentials: true }));
app.use('/bookings', require('./routes/bookings.js'));

connectDB().then(() => {
  app.listen(PORT, (err) => {
    if (err) {
      console.log("Connection Error: ", err);
      return;
    }
    console.log(`Server listening on port ${PORT}`);
  });
});

module.exports = app;

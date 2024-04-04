const cors = require('cors'),
    express = require('express'),
    connectDB = require('./db/db.js'),
    app = express();

app.use(express.json());
app.use(cors({ credentials: true }));
app.use('/bookings', require('./routes/bookings.js'));

const PORT = process.env.PORT || 3000;

// Invoca la conexión a la base de datos
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

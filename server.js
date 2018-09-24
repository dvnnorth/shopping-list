// Modules for Express server
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Init Express app
const app = express();

// Import routes
const apiRoutes = require('./routes/apiRoutes');

// Set Listening Port
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Call routes
apiRoutes(app);

// MongoDB Mongoose connection
const mongoDBURI = process.env.MONGODB_URI || "mongodb://localhost/shopping-list";
mongoose.connect(mongoDBURI, { useNewUrlParser: true })
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}, Mongoose connected to MongoDB`));
  })
  .catch(err => console.log(err));


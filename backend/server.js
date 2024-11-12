const express = require('express');
const mongoose = require("mongoose");
const cors = require('cors');
require('dotenv').config(); 
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

//Routes
const userRoutes = require('./routes/User');
const productRoutes = require('./routes/Product');

//Middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

async function initialize() {
    try {
      // Connect to the database
      mongoose.connect(process.env.MONGO_URI); 
        
      // Routes
      app.use('/api', userRoutes);
      app.use('/api', productRoutes);
  
    } catch (error) {
      console.error("Failed to connect to the database", error);
      process.exit(1); // Exit if the database connection fails
    }
  }

initialize();

app.listen(PORT, () => {
 console.log(`Server running on http://localhost:${PORT}`);
});

const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv")
dotenv.config();
const cors = require("cors");
const authController = require("./controller/authController");
const app = express();


// Connect to the database
async function connectDB() {
    try {
      await mongoose.connect(process.env.MONGO_URL);
  
      // Access the default Mongoose connection object
      const defaultConnection = mongoose.connection;
      console.log('MongoDB has been connected:', defaultConnection.name);
  
      // You can also use 'defaultConnection' instead of 'mongoose' in the rest of your code
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
      // Handle the error appropriately (log, throw, etc.)
    }
  }
  
  // Call the connectDB function
  connectDB();


  app.use(
    cors({
      origin: process.env.CLIENT_URL,
      credentials: true,
    })
  );
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/auth',authController)

//connect server
app.listen(process.env.PORT, () => {
    console.log(`Server is running at http://localhost:${process.env.PORT}`);
});
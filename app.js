// Import the Mongoose library
const mongoose = require("mongoose");

//Import the express module.
const express = require("express");
const cors = require("cors");
const { request } = require("http");
//Create instance of an express application
const app = express();

//Define the port, use env variable if avaiable, else 3000.
const PORT = process.env.PORT || 3000;

//------------------Middleware-------------------//
//Allow requests from different origins.
app.use(cors());
//Displays static material, a homepage when no URL extension added.
app.use(express.static("public"));
//Makes incoming data request from client readable by server.
//Turns JSON into Javascript Objects.
app.use(express.json());

//--------------------------------------------------------//
// -------------Mongoose Set-up---------------------------//
//--------------------------------------------------------//

// Establish a connection to database at "mongodb://localhost/databaseName".
// The .connect() method returns a promise that resolves when the connection is successful.
mongoose
  .connect("mongodb://localhost/students") // Specify the connection string for the MongoDB database.
  .then(() => {
    console.log("Connected to MongoDB");
    // Start the server only after the mongodb connection is established.
    //This prevents errors/problems caused by not having access to the database.
    //When making requests.
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  //Catch block to display error in server or database connection.
  .catch((error) => {
    console.error(`Error: ${error}`);
  });

// Extract the Schema constructor from mongoose to define the structure of documents within a collection.
let Schema = mongoose.Schema;

//Define schema for inputs prior to any requests
let studentSchema = new Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  DOB: {
    type: Date,
  },
  country: {
    type: String,
  },
  notes: String,
  login: {
    type: String,
  },
});

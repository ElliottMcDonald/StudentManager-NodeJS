//Import the express module.
const express = require("express");
const cors = require("cors");
const { request } = require("http");
//Create instance of an express application
const app = express();

//Define the port, use env variable if avaiable, else 3000.
const PORT = process.env.PORT || 3000;

//------------------Middleware-------------------//
//Allow requets from different origins.
app.use(cors());
//Displays static material, a homepage when no URL extension added.
app.use(express.static("public"));
//Makes incoming data request from client readable by server.
//Turns JSON into Javascript Objects.
app.use(express.json());

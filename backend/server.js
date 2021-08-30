//bringing in dependencies
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

//bring in use of enviroment variables
require('dotenv').config();

//initiating the express application and assiging a port
const app = express();
const port = process.env.PORT || 5000;

//usage of cors and json parsing middlewarre
app.use(cors());
app.use(express.json());

//MongoDB atlas uri being set
const uri = process.env.ATLAS_URI;

//initiating the apps connection to atlas
mongoose.connect(uri);
const connection = mongoose.connection;

//once connection established passing a success message
connection.once('open', () => {
  console.log('MongoDB connection succesful');
});

//initiating the port to listen for the app
app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});

//server.js
require("dotenv").config();
const express = require('express');
const rooms = require("./src/models/dishModels");
const app = express();


//Middleware
app.use(express.json());


const apiRoutes = require('./src/Routes/apiRoutes');

const PORT = process.env.PORT || 3000;
const BASE_URI = process.env.BASE_URI || '/api/v1';

app.use(BASE_URI, apiRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Base URI: http://localhost:${PORT}${BASE_URI}`);
});

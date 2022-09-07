const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require("body-parser");

require("dotenv").config({path: './config/.env'})
require('./config/db');

app.use(express.json(
    {limit: '50mb'}
));
app.use(cors());
app.use(bodyParser.json());
app.use('/api-admin', require('./routes/admin.route'));
app.use('/api-article', require('./routes/article.route'));




app.listen(process.env.PORT, () =>{  
    console.log(`listening on port: ${process.env.PORT}`);
    });

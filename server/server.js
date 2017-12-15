const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('../db');
// instantiate express server
const app = express();
// middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, '../client')));

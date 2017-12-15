const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes');
const db = require('../db/database.js');
// instantiate express server
const app = express();
// middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, '../client')));
app.use('/api', routes);

db.Todo.sync().then(() => {
  app.listen(3000, () => console.log('listening on port 3000'));
});

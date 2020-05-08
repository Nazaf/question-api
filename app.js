const morgan = require('morgan');
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const cors = require('cors');


const app = express();

// configuration
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(cors());

app.use((req, res, next) => {
  res.header('Access-Control-Expose-Headers', 'access-token');
  res.header('Access-Control-Allow-Origin', '*');
  return next();
});

app.use(express.static('assets'));
routes(app);

app.get('/', function (req, res) {
  res.send('Hello World!');
});

module.exports = app;

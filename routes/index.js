const express = require('express');

const router = express.Router();

const questionRouter = require('./questions');

router.use('/questions', questionRouter);

module.exports = (app) => {
  app.use('/', router);
};

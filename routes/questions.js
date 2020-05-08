'use strict';

const express = require('express');

const controller = require('../controllers/questions');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const questions = await controller.listAll();
    return res.status(200).send(JSON.parse(questions));
  } catch (error) {
    return next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const questions = await controller.listById(id);
    return res.status(200).send(questions);
  } catch (error) {
    return next(error);
  }
});

router.get('/:id/answer', async (req, res, next) => {
  try {
    const { id } = req.params;
    const questions = await controller.listAnswer(id);
    return res.status(200).send(questions);
  } catch (error) {
    return next(error);
  }
});

router.patch('/:id/answer', async (req, res, next) => {
  try {
    const { id } = req.params;
    const questions = await controller.addAnswer(id, req.body);
    return res.status(200).send(questions);
  } catch (error) {
    return next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const question = await controller.create(req.body);
    return res.status(201).send(question);
  } catch (error) {
    return next(error);
  }
});

module.exports = router;

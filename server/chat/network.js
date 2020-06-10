const express = require('express');
const router = express.Router();

const response = require('../network/response')
const { socket } = require('../../server/socket')
const message = []
router.post('/', async (req, res) => {
  try {
    message.push(req.body);
    socket.io.emit('message', message);
    response.success(req, res, 'Save Message', req.body, 201);
  } catch (error) {
    response.error(req, res, 'Ha ocurrido algun error,por favor intenta más tarde', 500)
  }
})
router.get('/', async (req, res) => {
  try {
    response.success(req, res, 'Get Messages', message, 201);
  } catch (error) {
    response.error(req, res, 'Ha ocurrido algun error,por favor intenta más tarde', 500)
  }
})
module.exports = router
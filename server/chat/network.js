const express = require('express');
const app = express();
const response = require('../network/response')
const multer = require('multer');

const upload = multer({
  dest: 'public/files'
}).any();

app.post('/', upload, async (req, res) => {
  try {
    console.log(req.files);
    // message.push(req.body);
    response.success(req, res, 'Save Message', 'req.body', 201);
  } catch (error) {
    response.error(req, res, 'Ha ocurrido algun error,por favor intenta más tarde', 500)
  }
})

app.get('/', async (req, res) => {
  try {
    response.success(req, res, 'Get Messages', message, 201);
  } catch (error) {
    response.error(req, res, 'Ha ocurrido algun error,por favor intenta más tarde', 500)
  }
})
module.exports = app
const express = require('express')
const chat = require('../chat/network')

const routes = (server) => {
  server.use('/chat', chat)
}
module.exports = routes
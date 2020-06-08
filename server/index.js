const path = require('path')
const express = require('express')
const cors = require('cors')
const app = express()
const server = require('http').Server(app)
const PORT = 3000;

// create config websockets
const { connect } = require('./socket')
connect(server)

app.use(cors());

const files = path.resolve(__dirname, '../dist')
app.use(express.static(files))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.sendFile('index.html', { root: 'dist' })
})

const chat = require('./chat/network');
app.use('/chat', chat)

server.listen(PORT, () => {
  console.log(`La Aplicacion esta escuchando en http://localhost:${PORT}`);
})
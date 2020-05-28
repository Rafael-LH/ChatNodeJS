const path = require('path')
const express = require('express')
const app = express()
const PORT = 3000;

const files = path.resolve(__dirname, '../dist')
app.use(express.static(files))

app.get('*', (req, res) => {
  res.sendFile('index.html', { root: 'dist' })
})

app.listen(PORT, () => {
  console.log(`La Aplicacion esta escuchando en http://localhost:${PORT}`);
})
const express = require('express')
const app = express()
const port = 2112


app.get('/api', (req, res) => {
  res.send('Hello World!')
})

app.get('/api/item/create', (req, res) => {
  res.send('Item created!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

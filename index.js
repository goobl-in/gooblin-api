const repository = require('./repository')
const express = require('express')

const app = express()
const port = 2112


var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use('/', express.static('webroot'))

app.get('/api/tickets', (req, res) => {
  res.send(repository.tickets())
})

app.put('/api/ticket/create', (req, res) => {
  
  const ticket = req.body

  if (Object.keys(ticket).length == 2) {
    repository.create(ticket)
    res.sendStatus(200)
  } else {
    res.sendStatus(400)
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

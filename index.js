const repository = require('./repository')
const express = require('express')

const app = express()
const port = 2112

app.set('json spaces', 2)

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use('/', express.static('webroot'))

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  next()
})

app.get('/api/tickets', (req, res) => {
  res.send(repository.getTickets(req.query.q))
})

app.get('/api/ticket/:id(\\d+)', (req, res) => {
  res.send(repository.getTicket(req.params.id))
})

app.delete('/api/ticket/:id(\\d+)', (req, res) => {
  repository.deleteTicket(req.params.id)
  res.sendStatus(204)
})

app.post('/api/ticket/:id(\\d+)', (req, res) => {
  const ticket = req.body

  if (Object.keys(ticket).length == 2) {
    repository.updateTicket(req.params.id, ticket)
    res.sendStatus(200)
  } else {
    res.sendStatus(400)
  }
})

app.put('/api/ticket', (req, res) => {
  
  const ticket = req.body

  if (Object.keys(ticket).length == 2) {
    repository.createTicket(ticket)
    res.sendStatus(200)
  } else {
    res.sendStatus(400)
  }
})


// # Logging in
const passport = require('passport')
const facebook = require('./facebook')
facebook()
app.get('/login/facebook', passport.authenticate('facebook'))

const loadFakeData = require("./load-testdata")
loadFakeData()

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

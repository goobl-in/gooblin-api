
let nextId = 0
const ticketsDB = []

function tickets() {
    return ticketsDB
}

function create(ticket) {
    ticket.id = nextId
    ticket.status = "open"
    nextId = nextId +1
    ticketsDB.push(ticket)
}

module.exports = {tickets, create}
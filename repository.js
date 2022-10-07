
let nextId = 0
const tickets = []

function getTickets() {
    return tickets
}

function createTicket(ticket) {
    ticket.id = nextId
    ticket.status = "open"
    nextId = nextId +1
    tickets.push(ticket)
}

function getTicket(id) {
    return tickets.filter(e => e.id == id)[0]
}

function deleteTicket(id) {
    tickets = tickets.filter(e => e.id != id)
}

module.exports = {getTickets, createTicket, getTicket, deleteTicket}
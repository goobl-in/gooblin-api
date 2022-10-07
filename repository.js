
let nextId = 0
const tickets = []

function getTickets(query) {
    if (query === undefined) {
        return tickets  
    } else {
        query = query.toLowerCase()
        return tickets.filter(ticket => {
            let foundTitle = ticket.title.toLowerCase().includes(query)
            let foundDescription = ticket.description.toLowerCase().includes(query)
            return foundTitle || foundDescription
        })
    }
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
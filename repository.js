
let nextId = 0
let tickets = []

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

function updateTicket(id, ticket) {
    const oldTicket = tickets.filter(t => t.id == id)[0]
    oldTicket.title = ticket.title
    oldTicket.description = ticket.description
}

function getTicket(id) {
    return tickets.filter(e => e.id == id)[0]
}

function deleteTicket(id) {
    tickets = tickets.filter(e => e.id != id)
}

const users = []
let nextUserId = 0

function createUserFromFacebook(facebookId) {
    let user = {id: nextUserId, facebookId: facebookId}
    users.push(user)
    nextUserId = nextUserId + 1
    return user
}

function getUserFromFacebook(facebookId) {
    let foundUsers = users.filter(u => u.facebookId)
    if (foundUsers.length > 0) {
        return foundUsers[0]
    } else {
        return null
    }
}

module.exports = {getTickets, createTicket, getTicket, deleteTicket, updateTicket, createUserFromFacebook, getUserFromFacebook}

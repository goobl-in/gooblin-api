

const repository = require('./repository')

function load() {
  repository.createTicket({
    title: "This is the first tiket",
    description: "We are goung to creaste pretty nice service"
  })
  
  repository.createTicket({
    title: "Autosuggest include search history #2072",
    description: `## Affected Projects

    React / Vue.JS / React Native
    
    Is your feature request related to a problem? Please describe.
    
    Have you considered adding search history to the autosuggest feature of DataSearch/CategorySearch similar to how google does it? It would be really handy`
  })
  
  repository.createTicket({
    title: "This is another ticker",
    description: "and yet another description"
  })
}


module.exports = load
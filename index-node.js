const express = require('express'),
app = express();

const cors = require("cors");

var url = require('url');
var dt = require('./date-time');

const port = process.env.PORT || 3000
const majorVersion = 1
const minorVersion = 3

app.use(cors({ origin: '*' }))

app.get('/about', (request, response) => {
	console.log('Calling "/about" on the Node.js server.')
	response.type('text/plain')
	response.send('This is a website that uses node.js to implement a dice rolling application.')
})

app.get('/dice', (request, response) => {
    console.log('Calling "/dice" on the Node.js server.')
    
    let die = Math.floor(Math.random() * 6) + 1;

    response.type('text/plain');
    response.send(die.toString());
})

app.use((request, response) => {
    response.type('text/plain')
    response.status(404)
    response.send('404 - Not Found')
  })
  
  app.use((err, request, response, next) => {
    console.error(err.message)
    response.type('text/plain')
    response.status(500)
    response.send('500 - Server Error')
  })
  
  app.listen(port, () => console.log(
    `Express started at \"http://localhost:${port}\"\n` +
    `press Ctrl-C to terminate.`)
  )
	

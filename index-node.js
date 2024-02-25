const express = require("express");
app = express();

const cors = requre("cors")
var url = require("url")
var dt = require("./date-time")

const port = process.env.PORT || 3000
const majorVersion =1
const minorVersion=3


app.use(express.static(__dirname + '/static'))
app.use(cors({ orgin: "*"}))

app.get("/about", (request, responce) => {
	console.log('Calling "/about" on nodejs server. ')
	responce.type('text/plain')
	responce.send("This is a website that utilizes server-side nodejs to implement a dice rolling app.")
})

app.get("/dice", (request, response) =>{
	console.log('Calling "/dice" on the node.js server.')
	let die = Math.floor(Math.random()*6)+1
	response.type('text/plain');
	response.send(die);
})

app.use((request, responce)=>{
	responce.type("text/plain")
	responce.status(404)
	responce.send("404 - not found")
})

app.use((err, request,next)=>{
	console.error(err.message)
	response.type('text/plain')
	responce.status(500)
	responce.send("500 - service error")

})

app.listen(port, () => console.log(
	'Express started at \"http://localhost:${port}"\n' +
	'press Ctrl-C to terminate.')
)
	

var http = require('http');

const PORT = 3002 || process.env.PORT;

function handleRequest (req, res){
	res.end("It works! \nURL: " + req.url)
}

var server = http.createServer(handleRequest);

server.listen(PORT, function () {
	console.log("Started \n Port: " + PORT)
})


const http = require('http');

const server = http.createServer(function(request, response) {
  if (request.url === '/') {
  response.end('Welcome to my homepage');
  }
  if (request.url === '/about') {
  response.end('History of our company');
  }
  response.end(`<h1>404 Error!</h1>
	  <a href="/">Back home</a>`)

});

server.listen(5000);


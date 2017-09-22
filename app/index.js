//import { BrowserRouter } from 'react-router-dom';
var React = require('react');
var ReactDOM = require('react-dom');
var App = require('./components/App');
const http = require('http');
/*var express = require('express');
var app = express();
var path = require('path');*/
/*
app.set('views', __dirname + '/components');
app.set('view engine', 'js');
app.engine('js', require('express-react-views').createEngine());

app.get('/', function(request, response) {
   ReactDOM.render(
	<App />,
	document.getElementById('app')
	);
    
});
app.listen(8080);*/
/*
app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
    
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});*/

/*// viewed at http://localhost:8080
app.get('/', function(req, res) {
	console.log('sent html');
    //res.sendFile(path.join(__dirname + 'index.html'));
   res.sendFile(path.join(__dirname + 'check.html'));
     
});

app.listen(8080);*/

 ReactDOM.render(
	<App />,
	document.getElementById('app')
	);

/*var express = require('express');
var app = express();

app.use(express.static(__dirname + '/'));

app.listen(process.env.PORT || 8080);
*/
var port = process.env.PORT||5000;
console.log(port);

const server = http.createServer((req, res) => {
  res.end();
});
server.on('clientError', (err, socket) => {
  socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
});
server.listen(port);
console.log('success'+port);
/*ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('app'));*/






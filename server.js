var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    response.render('index.html');
   // response.send('Hello World!');
});

app.get('/hello/:name', function(request, response){
    response.send('hello ' + request.params.name);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
    console.log("Listening on " + port);
});
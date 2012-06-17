var express = require('express');

var app = express.createServer(express.logger());

app.configure(function(){
        app.set("view options", { layout: false, pretty: true });
        app.use(express.favicon());
        app.use("/public", express.static(__dirname + '/public'));
    }
);

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
var express = require('express');

var app = express.createServer(express.logger());

app.configure(function(){
        app.set("view options", { layout: false, pretty: true });
        app.use(express.favicon());
        app.use(express.static(__dirname + '/public'));
        app.use(express.cookieParser());
        app.use(express.session({ secret: "g0tw0ggl3" }));
    }
);

app.get('/login', function(request, response){
    request.session.loggedIn = true;
    response.send('logged in');
});

app.get('/logout', function(request, response){
    request.session.loggedIn = false;
    response.send('logged out');
});

app.get('/hello/:name', function(request, response){
    response.send('hello ' + request.params.name);
});

app.get('/user', function(request, response){
    response.send({
        name: 'Andrew Thomson',
        section: 'Scout Leader',
        gravatar: 'img/gravatar.jpg'
    });
});

app.get('/contacts', function(request, response){

    if (request.session.loggedIn){
        response.send({
            member: {
                firstname: "Andrew",
                lastname: "Thomson",
                address: "",
                dob: "",
                email: "",
                phone: "",
                mobile: ""
            },
            parental: {
                firstname: "Ian",
                lastname: "Thomson",
                address: "",
                email: "",
                phone: "",
                mobile: "",
                occupation: "",
                skills: "",
                assist: true
            },
            emergency: {
                firstname: "Susan",
                lastname: "Thomson",
                relation: "Mother",
                address: "",
                phone: "",
                mobile: ""
            }
        });
    }
    else {
        response.send("Not logged in", 404);
    }
});

app.get('/consents', function(request, response){
    response.send({
        coc: {
            member: true,
            parent: true
        },
        photo: true,
        activity: true,
        medical: true,
        giftAid: {
            past: false,
            present: true
        }
    });
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
    console.log("Listening on " + port);
});
////////////
// CONFIG //
////////////

// The main application script, ties everything together.
var express = require('express');
var mongoose = require('mongoose');
var app = express.createServer(express.logger());
var redisStore = require('connect-redis')(express);

// Connect to Mongo when app initializes
mongoose.connect(process.env.MONGOOSE_AUTH);

// Configure the server
app.configure(function(){
        app.use(express.favicon());
        app.use(express.static(__dirname + '/public'));
        app.use(express.bodyParser());
        app.use(express.cookieParser());
        app.use(express.session({ secret: process.env.SESSION_AUTH, store: new redisStore }));
        app.use(app.router);
    }
);


///////////////////////////////////////////////////////////
// UNPROTECTED ROUTES                                    //
// (All files in public folder are not protected either) //
///////////////////////////////////////////////////////////
app.all('/login', function(request, response){
    if (request.body.uname === "andrew" && request.body.pword === "test"){
        request.session.loggedInUser = true;
        response.send({ result: 'success', redirectPath: '/' });
    }
    else {
        response.send({ result: 'error', message: 'Invalid Username/Password' });
    }
});

app.all('/logout', function(request, response){
    request.session.destroy();
    response.send({ result: 'success', redirectPath: '/' });
});


//////////////////////
// ROUTE PROTECTION //
//////////////////////
app.all("*", function(request, response, next){
    if (request.session.loggedInUser){
        next();
    }
    else {
        console.log("Not Authorised");
        response.redirect("/login.html");
    }
});

app.get("/", function(request, response){
    response.sendfile('index.html');
});


//////////////////////
// PROTECTED ROUTES //
//////////////////////
app.get('/user', function(request, response){
    response.send({
        name: 'Andrew Thomson',
        section: 'Scout Leader',
        gravatar: 'img/gravatar.jpg'
    });
});

app.get('/contacts', function(request, response){
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

app.get('/medical', function(request, response){
    response.send({
        conditions: "None",
        diet: "N/A"
    });
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
    console.log("Listening on " + port);
});
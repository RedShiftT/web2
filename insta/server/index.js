var express = require('express');
var vjm = require('vue-jwt-mongo');

var mongoUrl = 'mongodb://localhost/'
var secret = 'w4XAnERkqiz4r6EC502jhWWxHRRSlsQ1dd5zee6MKi18OPSUc4sWQP8yh9JScAH'

var app = express();
var vjmServer = vjm.Server({
    mongoUrl: mongoUrl,

    jwtSecret: secret
})

app.use(express.static('../client'));

app.post('/register', vjmServer.registerHandler);
app.listen(8080);
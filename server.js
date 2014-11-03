'use strict';

//load all the dependencies for the server + tests
var express = require('express');
var bodyparser = require('body-parser');
var moment = require('moment');
var app = express();

//load the routes into the app created above
var routes = require('./routes');
routes(app, bodyparser, moment);
app.listen(8080);


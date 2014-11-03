'use strict'

module.exports = function (app, bodyparser, moment) {
  //returns local time
  app.get('/time', function(req, res) {
    var time = {'lTime': moment().format('h:mm A').toString()};
    res.json(time);
  });

  //returns a greeting to the name POSTed
  app.get('/greet/:name', bodyparser.urlencoded({extended: false}), function(req, res) {
    var greeting = {'myGreeting': ('Hello, ' + req.params.name + '!')};
    res.json(greeting);
  });
};

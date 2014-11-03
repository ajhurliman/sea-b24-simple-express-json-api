'use strict';

//load all the dependencies for the server + tests
var chai = require('chai');
var chaiHttp = require('chai-http');
chai.use(chaiHttp);
var expect = chai.expect;
var moment = require('moment');
require('../server');


describe('Simple JSON API', function() {

  it('should send the local time', function(done){
    var localTime = (moment().format('h:mm A').toString());

    chai.request('http://localhost:8080').get('/time').end(function(err, res) {
      expect(err).to.be.equal(null);
      expect(res.body.lTime).to.be.equal(localTime);
      done();
    });
  });


  it('should greet someone', function(done) {
    var testGreeting = 'Hello, james!';

    chai.request('http://localhost:8080').get('/greet/james').end(function(err, res) {
        expect(res.body.myGreeting).to.be.equal(testGreeting);
        expect(err).to.be.equal(null);
        done();
    });
  });

});

/*chai.request(app)
  .post('/user/me')
  .field('_method', 'put')
  .field('password', '123')
  .field('confirmPassword', '123')*/

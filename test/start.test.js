var app = require('../bin/start');
var request = require('supertest')(app);
var should = require("should");


// console.log(request);

describe('start/test.js', function() {

  describe('router', function() {
    it('should not sign up an user when loginname is empty', function(done) {
      request.get('/user')
          // .expect('Content-Type', /json/)
          // .expect('Content-Length', '20')
          // .expect(200)
          // .end(function(err, res){
          //   if (err) throw err;
          // });
    });
  });

});
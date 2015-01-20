'use strict';
var superagent = require('superagent');
var chai = require('chai'),
    expect = chai.expect,
    should = chai.should();

describe('Authentication Tests', function() {

    it('can successfully create a new user', function(done) {
        this.timeout(5000);
        superagent.post('http://localhost:3000/api/v1/auth/register')
            .send({username:"test", password:"test"})
            .end(function(err,res) {
                expect(err).to.eql(null);
                expect(res.status).to.be.eql(200);
                expect(res.body._id).to.not.be.eql(null);
                return done();                
            });
    });

    it('can successfully login a user', function(done) {
        superagent.post('http://localhost:3000/api/v1/auth/login')
            .send({username:"test", password:"test"})
            .end(function(err,res) {
                expect(err).to.eq(null);
                expect(res.status).to.be.eql(200);
                return done();
            });
    });

    it('can successfully logout a user', function(done) {
        superagent.get('http://localhost:3000/api/v1/auth/logout')
            .end(function(err,res) {
                expect(err).to.eql(null);
                expect(res.status).to.be.eql(200);
                return done();
            });
    });

});

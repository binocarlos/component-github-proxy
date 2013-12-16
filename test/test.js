var Proxy = require('../src');
var express = require('express');
var http = require('http');
var request = require('request');

describe('component-github-proxy', function(){

  var proxy, app, server;

  before(function(done){
    proxy = Proxy();
    app = express();
    server = http.createServer(app);
    app.use(proxy);
    server.listen(8791, function(){
      done();
    })
  })

  it('should compile a basic component', function(done) {
    
    this.timeout(5000);

    request({
      url:'http://127.0.0.1:8791/component/emitter',
      method:'GET'
    }, function(error, response, body){
      

      response.statusCode.should.equal(200);
      response.headers["content-type"].indexOf("application/javascript").should.equal(0);

      request({
        url:'http://127.0.0.1:8791/component/emitter/build/build.css',
        method:'GET'
      }, function(error, response, body){

        response.statusCode.should.equal(200);
        response.headers["content-type"].indexOf("text/css").should.equal(0);
        done();
        
      })
    })

  })

})

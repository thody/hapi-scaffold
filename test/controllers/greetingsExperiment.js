var Code = require('code');   // assertion library
var Lab = require('lab');
var lab = exports.lab = Lab.script();
var server = require('../../server.js');

lab.experiment('greetings controller', function () {
  lab.test('index sends greeting', function (done) {
    var options = {
      method: "GET",
      url: "/"
    };

    server.inject(options, function (response) {
      Code.expect(response.payload).to.equal('Hello world!');
      done();
    });
  });
});


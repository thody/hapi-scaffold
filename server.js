// Set default node environment
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var Hapi = require("hapi");
var config = require('./config/config');
var server = new Hapi.Server(config.server.port);
var routes = require('./routes')(server);

// Don't start the server is this module isn't the parent process (eg. running tests)
if (!module.parent) {
  server.start(function () {
    console.log("Server started", server.info.uri);
  });
}

module.exports = server;

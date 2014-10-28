'use strict';

var greetingsCtrl = require('./controllers/greetings.js');

module.exports = function(server) {
  server.route({
    method: 'GET',
    path: '/',
    handler: greetingsCtrl.index
  });
};
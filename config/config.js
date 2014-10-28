'use strict';

var _ = require('lodash');

/**
 * Load environment configuration
 */
module.exports = _.merge(
  require('./environments/all.js'),
    require('./environments/' + process.env.NODE_ENV + '.js') || {});
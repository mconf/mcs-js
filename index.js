'use strict';
/**
 * mcs-js: A simple client/server library for Media Control Server
 * @module mcs-js
 */
var mcs = require('./lib/MCSClient');

mcs.prototype.name = 'mcs-js';
mcs.prototype.version = '0.0.1-dev';

var Server = require('./lib/MCSServer');

mcs.Server = Server;
module.exports = mcs;

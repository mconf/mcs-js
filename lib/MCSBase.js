'use strict';

const EventEmitter = require('events');

/**
 * Base Class for Media Control Server
 * @extends external:EventEmitter
 * @memberof module:mcs-js
 */
class MCSBase extends EventEmitter {
  constructor () {
    super();
  }
}

module.exports = MCSBase;

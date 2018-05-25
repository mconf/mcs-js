'use strict';

const MCSMessage = require('./MCSMessage');

class MediaDisconnected extends MCSMessage {
  constructor(id) {
    super();
    this.body.id = id;
  }
}

module.exports = MediaDisconnected;

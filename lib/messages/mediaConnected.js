'use strict';

const MCSMessage = require('./MCSMessage');

class MediaConnected extends MCSMessage {
  constructor(data) {
    super();
    this.body.data = data;
  }
}

module.exports = MediaConnected;

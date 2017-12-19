'use strict';

const MCSMessage = require('./MCSMessage');

class MediaDisconnected extends MCSMessage {
  constructor(id, userId) {
    super();
    this.body.id = id;
    this.body.userId = userId;
  }
}

module.exports = MediaDisconnected;

'use strict';

const MCSMessage = require('./MCSMessage');

class MediaConnected extends MCSMessage {
  constructor(id, userId, name, muted) {
    super();
    this.body.id = id;
    this.body.userId = userId;
    this.body.name = name;
    this.body.muted = muted;
  }
}

module.exports = MediaConnected;

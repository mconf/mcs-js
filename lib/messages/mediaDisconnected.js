'use strict';

const MCSMessage = require('./MCSMessage');

class MediaDisconnected extends MCSMessage {
  constructor(media) {
    super();
    this.body.media = media;
  }
}

module.exports = MediaDisconnected;

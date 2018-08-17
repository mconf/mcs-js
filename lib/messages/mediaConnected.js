'use strict';

const MCSMessage = require('./MCSMessage');

class MediaConnected extends MCSMessage {
  constructor(roomId, media) {
    super();
    this.body.roomId = roomId;
    this.body.media = media;
  }
}

module.exports = MediaConnected;

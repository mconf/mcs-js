'use strict';

const MCSMessage = require('./MCSMessage');

class MediaDisconnected extends MCSMessage {
  constructor(roomId, mediaId) {
    super();
    this.body.roomId = roomId;
    this.body.mediaId= mediaId;
  }
}

module.exports = MediaDisconnected;

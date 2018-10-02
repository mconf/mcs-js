'use strict';

const MCSMessage = require('./MCSMessage');
const C = require('../constants');

class MediaDisconnected extends MCSMessage {
  constructor(roomId, mediaId) {
    super(C.MEDIA_DISCONNECTED);
    this.body.roomId = roomId;
    this.body.mediaId= mediaId;
  }
}

module.exports = MediaDisconnected;

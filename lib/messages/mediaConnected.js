'use strict';

const MCSMessage = require('./MCSMessage');
const C = require('../constants');

class MediaConnected extends MCSMessage {
  constructor(roomId, media) {
    super(C.MEDIA_CONNECTED);
    this.body.roomId = roomId;
    this.body.media = media;
  }
}

module.exports = MediaConnected;

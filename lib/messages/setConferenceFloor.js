'use strict';

const MCSMessage = require('./MCSMessage');

class setConferenceFloor extends MCSMessage {
  constructor(roomId, mediaId) {
    super();
    this.body.room_id = roomId
    this.body.media_id = mediaId;
  }
}

module.exports = setConferenceFloor;
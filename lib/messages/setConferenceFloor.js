'use strict';

const MCSMessage = require('./MCSMessage');
const C = require('../constants');

class setConferenceFloor extends MCSMessage {
  constructor(roomId, mediaId) {
    super(C.SET_CONFERENCE_FLOOR);
    this.body.room_id = roomId
    this.body.media_id = mediaId;
  }
}

module.exports = setConferenceFloor;
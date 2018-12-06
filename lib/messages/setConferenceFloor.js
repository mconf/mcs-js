'use strict';

const MCSMessage = require('./MCSMessage');
const C = require('../constants');

class setConferenceFloor extends MCSMessage {
  constructor(roomId, mediaId) {
    super(C.SET_CONFERENCE_FLOOR);
    this.body.roomId = roomId
    this.body.mediaId = mediaId;
  }
}

module.exports = setConferenceFloor;

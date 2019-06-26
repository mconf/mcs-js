'use strict';

const MCSMessage = require('./MCSMessage');
const C = require('../constants');

class StartTalking extends MCSMessage {
  constructor(room, user, mediaId) {
    super(C.START_TALKING);
    this.body.roomId = room;
    this.body.userId = user;
    this.body.mediaId = mediaId;
  }
}

module.exports = StartTalking;

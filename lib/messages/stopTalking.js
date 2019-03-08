'use strict';

const MCSMessage = require('./MCSMessage');
const C = require('../constants');

class StopTalking extends MCSMessage {
  constructor(room, user, mediaId) {
    super(C.STOP_TALKING);
    this.body.roomId = room;
    this.body.userid = user;
    this.body.mediaId = mediaId;
  }
}

module.exports = StopTalking;

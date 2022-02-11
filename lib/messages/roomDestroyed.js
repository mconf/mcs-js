'use strict';

const MCSMessage = require('./MCSMessage');
const C = require('../constants');

class RoomDestroyed extends MCSMessage {
  constructor(roomId, options = {}) {
    super(C.ROOM_DESTROYED, null, options);
    this.body.roomId = roomId;
  }
}

module.exports = RoomDestroyed;

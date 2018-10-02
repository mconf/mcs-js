'use strict';

const MCSMessage = require('./MCSMessage');
const C = require('../constants');

class RoomDestroyed extends MCSMessage {
  constructor(roomId) {
    super(C.ROOM_DESTROYED);
    this.body.roomId = roomId;
  }
}

module.exports = RoomDestroyed;

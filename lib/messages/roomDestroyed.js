'use strict';

const MCSMessage = require('./MCSMessage');

class RoomDestroyed extends MCSMessage {
  constructor(roomId) {
    super();
    this.body.roomId = roomId;
  }
}

module.exports = RoomDestroyed;

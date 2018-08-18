'use strict';

const MCSMessage = require('./MCSMessage');

class RoomCreated extends MCSMessage {
  constructor(room) {
    super();
    this.body.room = room;
  }
}

module.exports = RoomCreated;

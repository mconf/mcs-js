'use strict';

const MCSMessage = require('./MCSMessage');
const C = require('../constants');

class RoomCreated extends MCSMessage {
  constructor(room) {
    super(C.ROOM_CREATED);
    this.body.room = room;
  }
}

module.exports = RoomCreated;

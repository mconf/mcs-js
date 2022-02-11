'use strict';

const MCSMessage = require('./MCSMessage');
const C = require('../constants');

class RoomCreated extends MCSMessage {
  constructor(room, options = {}) {
    super(C.ROOM_CREATED, null, options);
    this.body.room = room;
  }
}

module.exports = RoomCreated;

'use strict';

const MCSMessage = require('./MCSMessage');

class RoomsList extends MCSMessage {
  constructor(rooms, params) {
    super(null, null, params);
    this.body.rooms = rooms;
  }
}

module.exports = RoomsList;

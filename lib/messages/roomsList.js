'use strict';

const MCSMessage = require('./MCSMessage');
const C = require('../constants');

class RoomsList extends MCSMessage {
  constructor(rooms, params) {
    super(C.ROOMS_LIST, null, params);
    this.body.rooms = rooms;
  }
}

module.exports = RoomsList;

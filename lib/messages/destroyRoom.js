'use strict';

const MCSMessage = require('./MCSMessage');
const { DESTROY_ROOM } = require('../constants');

class DestroyRoom extends MCSMessage {
  constructor(roomId, options) {
    super(DESTROY_ROOM);
    this.body = {
      roomId,
      options,
    };
  }
}

module.exports = DestroyRoom;

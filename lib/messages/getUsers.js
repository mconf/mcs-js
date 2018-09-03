'use strict';

const MCSMessage = require('./MCSMessage');

class getUsers extends MCSMessage {
  constructor(roomId) {
    super();
    this.body.roomId = roomId;
  }
}

module.exports = getUsers;

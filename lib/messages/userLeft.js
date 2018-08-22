'use strict';

const MCSMessage = require('./MCSMessage');

class UserLeft extends MCSMessage {
  constructor(roomId, userId) {
    super();
    this.body.roomId = roomId;
    this.body.userId = userId;
  }
}

module.exports = UserLeft;

'use strict';

const MCSMessage = require('./MCSMessage');

class UserJoined extends MCSMessage {
  constructor(roomId, user) {
    super();
    this.body.roomId = roomId;
    this.body.user = user;
  }
}

module.exports = UserJoined;

'use strict';

const MCSMessage = require('./MCSMessage');
const C = require('../constants');

class UserJoined extends MCSMessage {
  constructor(roomId, user) {
    super(C.USER_JOINED);
    this.body.roomId = roomId;
    this.body.user = user;
  }
}

module.exports = UserJoined;

'use strict';

const MCSMessage = require('./MCSMessage');
const C = require('../constants');

class UserLeft extends MCSMessage {
  constructor(roomId, userId) {
    super(C.USER_LEFT);
    this.body.roomId = roomId;
    this.body.userId = userId;
  }
}

module.exports = UserLeft;

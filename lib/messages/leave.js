'use strict';

const MCSMessage = require('./MCSMessage');

class Leave extends MCSMessage {
  constructor(userId, roomId, params) {
    super(null, null, params);
    this.body.userId = userId;
    this.body.roomId = roomId;
    this.body.params = params;
  }
}

module.exports = Leave;

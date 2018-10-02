'use strict';

const MCSMessage = require('./MCSMessage');
const C = require('../constants');

class Leave extends MCSMessage {
  constructor(userId, roomId, params) {
    super(C.LEAVE, null, params);
    this.body.userId = userId;
    this.body.roomId = roomId;
    this.body.params = params;
  }
}

module.exports = Leave;

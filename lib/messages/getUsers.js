'use strict';

const MCSMessage = require('./MCSMessage');
const C = require('../constants');

class getUsers extends MCSMessage {
  constructor(roomId) {
    super(C.GET_USERS);
    this.body.roomId = roomId;
  }
}

module.exports = getUsers;

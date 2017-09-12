'use strict'

const MCSMessage = require('./MCSMessage');

class Leave extends MCSMessage {
  constructor(room_id) {
    super();
    this.body.room_id = room_id;
  }
}

module.exports = Leave;

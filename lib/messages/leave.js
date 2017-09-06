'use strict'

const MCSMessage = require('./MCSMessage');

class Leave extends MCSMessage {
  constructor(room_id, params) {
    super();
    this.body.room_id = room_id;
    this.body.params = params;
  }
}

module.exports = Leave;

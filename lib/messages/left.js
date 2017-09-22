'use strict'

const MCSMessage = require('./MCSMessage');

class Left extends MCSMessage {
  constructor(room_id, params) {
    super();
    this.body.room_id = room_id;
    this.body.params = params;
  }
}

module.exports = Left;

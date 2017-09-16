'use strict'

const MCSMessage = require('./MCSMessage');

class Left extends MCSMessage {
  constructor(room_id) {
    super();
    this.body.room_id = room_id;
  }
}

module.exports = Left;

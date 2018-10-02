'use strict';

const MCSMessage = require('./MCSMessage');
const C = require('../constants');

class Join extends MCSMessage {
  constructor(room_id, type, params) {
    super(C.JOIN);
    this.body.room_id = room_id;
    this.body.type = type;
    this.body.params = params;
  }
}

module.exports = Join;

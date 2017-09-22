'use strict'

const MCSMessage = require('./MCSMessage');

class Join extends MCSMessage {
  constructor(room_id, user_name, room_type, params) {
    super();
    this.body.room_id = room_id;
    this.body.user_name = user_name;
    this.body.room_type = room_type;
    this.body.params = params;
  }
}

module.exports = Join;

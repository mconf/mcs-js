'use strict'

const MCSMessage = require('./MCSMessage');

class Join extends MCSMessage {
  constructor(room_id, user_name, room_type) {
    super();
    this.body.room_id = room_id;
    this.body.user_name = user_name;
    this.body.room_type = room_type;
  }
}

module.exports = Join;

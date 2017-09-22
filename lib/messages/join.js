'use strict';

const MCSMessage = require('./MCSMessage');

class Join extends MCSMessage {
  constructor(room_id, user_name, params) {
    super();
    this.body.room_id = room_id;
    this.body.user_name = user_name;
    this.body.params = params;
  }
}

module.exports = Join;

'use strict';

const mcsmessage = require('./mcsmessage');

class getUsers extends mcsmessage {
  constructor(room_id) {
    super();
    this.body.room_id = room_id;
  }
}

module.exports = getUsers;

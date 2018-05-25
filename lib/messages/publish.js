'use strict';

const MCSMessage = require('./MCSMessage');

class Publish extends MCSMessage {
  constructor(user, room, type, params) {
    super();
    this.body.user = user;
    this.body.room = room;
    this.body.type = type;
    this.body.params = params;
  }
}

module.exports = Publish;

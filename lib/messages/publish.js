'use strict';

const MCSMessage = require('./MCSMessage');
const C = require('../constants');

class Publish extends MCSMessage {
  constructor(user, room, type, params) {
    super(C.PUBLISH);
    this.body.user = user;
    this.body.room = room;
    this.body.type = type;
    this.body.params = params;
  }
}

module.exports = Publish;

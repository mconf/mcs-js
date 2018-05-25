'use strict';

const MCSMessage = require('./MCSMessage');

class UserJoined extends MCSMessage {
  constructor(data) {
    super();
    this.body.data = data;
  }
}

module.exports = UserJoined;

'use strict';

const MCSMessage = require('./MCSMessage');

class UserLeft extends MCSMessage {
  constructor(userId) {
    super();
    this.body.userId = userId;
  }
}

module.exports = UserLeft;

'use strict';

const MCSMessage = require('./MCSMessage');

class UserLeft extends MCSMessage {
  constructor(user) {
    super();
    this.body.user = user;
  }
}

module.exports = UserLeft;

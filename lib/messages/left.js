'use strict';

const MCSMessage = require('./MCSMessage');

class Left extends MCSMessage {
  constructor(userId, params) {
    super(null, null, params);
    this.body.userId = userId;
  }
}

module.exports = Left;

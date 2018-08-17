'use strict';

const MCSMessage = require('./MCSMessage');

class getUserMedias extends MCSMessage {
  constructor(userId) {
    super();
    this.body.userId = userId;
  }
}

module.exports = getUserMedias;

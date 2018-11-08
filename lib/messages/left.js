'use strict';

const MCSMessage = require('./MCSMessage');
const C = require('../constants');

class Left extends MCSMessage {
  constructor(userId, params) {
    super(C.LEFT, null, params);
    this.body.userId = userId;
  }
}

module.exports = Left;

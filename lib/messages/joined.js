'use strict';

const MCSMessage = require('./MCSMessage');
const C = require('../constants');

class Joined extends MCSMessage {
  constructor(user_id, params) {
    super(C.JOINED, null, params);
    this.body.user_id = user_id;
    this.body.params = params;
  }
}

module.exports = Joined;

'use strict';

const MCSMessage = require('./MCSMessage');

class Joined extends MCSMessage {
  constructor(user_id, params) {
    super(null, null, params);
    this.body.user_id = user_id;
    this.body.params = params;
  }
}

module.exports = Joined;

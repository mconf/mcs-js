'use strict'

const MCSMessage = require('./MCSMessage');

class Joined extends MCSMessage {
  constructor(user_id, params) {
    super();
    this.body.user_id = user_id;
    this.body.params = params;
  }
}

module.exports = Joined;

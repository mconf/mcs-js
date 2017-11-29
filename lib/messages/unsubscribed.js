'use strict';

const MCSMessage = require('./MCSMessage');

class Unsubscribed extends MCSMessage {
  constructor() {
    super();
  }
}

module.exports = Unsubscribed;

'use strict'

const MCSMessage = require('./MCSMessage');

class UnpublishedAndUnsubscribed extends MCSMessage {
  constructor() {
    super();
  }
}

module.exports = UnpublishedAndUnsubscribed;

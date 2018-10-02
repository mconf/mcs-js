'use strict';

const MCSMessage = require('./MCSMessage');
const C = require('../constants');

class UnpublishedAndUnsubscribed extends MCSMessage {
  constructor() {
    super(C.UNPUBLISHED_AND_UNSUBSCRIBED);
  }
}

module.exports = UnpublishedAndUnsubscribed;

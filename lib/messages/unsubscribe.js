'use strict';

const MCSMessage = require('./MCSMessage');
const C = require('../constants');

class Unsubscribe extends MCSMessage {
  constructor(userId, mediaId) {
    super(C.UNSUBSCRIBE);
    this.body.userId = userId;
    this.body.mediaId = mediaId;
  }
}

module.exports = Unsubscribe;

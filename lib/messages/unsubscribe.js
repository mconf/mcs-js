'use strict';

const MCSMessage = require('./MCSMessage');

class Unsubscribe extends MCSMessage {
  constructor(userId, mediaId) {
    super();
    this.body.userId = userId;
    this.body.mediaId = mediaId;
  }
}

module.exports = Unsubscribe;

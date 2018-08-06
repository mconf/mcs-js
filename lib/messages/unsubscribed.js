'use strict';

const MCSMessage = require('./MCSMessage');

class Unsubscribed extends MCSMessage {
  constructor(userId, mediaId, params) {
    super(null, null, params);
    this.body.userId = userId;
    this.body.mediaId = mediaId;
  }
}

module.exports = Unsubscribed;

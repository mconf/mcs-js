'use strict';

const MCSMessage = require('./MCSMessage');

class Unpublished extends MCSMessage {
  constructor(userId, mediaId, params) {
    super(null, null, params);
    this.body.userId = userId;
    this.body.mediaId = mediaId;
  }
}

module.exports = Unpublished;

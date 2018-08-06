'use strict';

const MCSMessage = require('./MCSMessage');

class Unpublish extends MCSMessage {
  constructor(userId, mediaId) {
    super();
    this.body.mediaId = mediaId;
    this.body.userId = userId;
  }
}

module.exports = Unpublish;

'use strict';

const MCSMessage = require('./MCSMessage');
const C = require('../constants');

class Unsubscribed extends MCSMessage {
  constructor(userId, mediaId, params) {
    super(C.UNSUBSCRIBED, null, params);
    this.body.userId = userId;
    this.body.mediaId = mediaId;
  }
}

module.exports = Unsubscribed;

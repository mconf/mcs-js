'use strict';

const MCSMessage = require('./MCSMessage');
const C = require('../constants');

class Unpublished extends MCSMessage {
  constructor(userId, mediaId, params) {
    super(C.UNPUBLISHED, null, params);
    this.body.userId = userId;
    this.body.mediaId = mediaId;
  }
}

module.exports = Unpublished;

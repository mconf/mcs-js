'use strict';

const MCSMessage = require('./MCSMessage');
const C = require('../constants');

class SubscribedTo extends MCSMessage {
  constructor(mediaId, sourceMediaInfo) {
    super(C.SUBSCRIBED_TO);
    this.body.mediaId = mediaId;
    this.body.sourceMediaInfo = sourceMediaInfo;
  }
}

module.exports = SubscribedTo;

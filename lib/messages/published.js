'use strict';

const MCSMessage = require('./MCSMessage');

class Published extends MCSMessage {
  constructor(mediaId, descriptor, params) {
    super(null, null, params);
    this.body.mediaId = mediaId;
    this.body.descriptor = descriptor;
  }
}

module.exports = Published;

'use strict';

const MCSMessage = require('./MCSMessage');

class Published extends MCSMessage {
  constructor(mediaId, sdp) {
    super();
    this.body.media_id = mediaId;
    this.body.descriptor = descriptor;
  }
}

module.exports = Published;

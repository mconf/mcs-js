'use strict';

const MCSMessage = require('./MCSMessage');

class Subscribed extends MCSMessage {
  constructor(mediaId, sdp) {
    super();
    this.body.media_id = mediaId;
    this.body.descriptor = descriptor;
  }
}

module.exports = Subscribed;

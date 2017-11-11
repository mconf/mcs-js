'use strict';

const MCSMessage = require('./MCSMessage');

class PublishedAndSubscribed extends MCSMessage {
  constructor(mediaId, sdp) {
    super();
    this.body.media_id = mediaId;
    this.body.sdp = sdp;
  }
}

module.exports = PublishedAndSubscribed;

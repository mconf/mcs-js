'use strict'

const MCSMessage = require('./MCSMessage');

class PublishAndSubscribe extends MCSMessage {
  constructor(media_id, sdp) {
    super();
    this.body.media_id = media_id;
    this.body.sdp = sdp;
  }
}

module.exports = PublishAndSubscribe;

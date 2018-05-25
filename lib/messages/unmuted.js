'use strict';

const MCSMessage = require('./MCSMessage');

class Unmuted extends MCSMessage {
  constructor(mediaId) {
    super();
    this.body.media_id = mediaId;
  }
}

module.exports = Unmuted;

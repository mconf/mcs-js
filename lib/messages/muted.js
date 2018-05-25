'use strict';

const MCSMessage = require('./MCSMessage');

class Muted extends MCSMessage {
  constructor(mediaId) {
    super();
    this.body.media_id = mediaId;
  }
}

module.exports = Muted;

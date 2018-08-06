'use strict';

const MCSMessage = require('./MCSMessage');

class MediaState extends MCSMessage {
  constructor(mediaId, state) {
    super();
    this.body.mediaId = mediaId;
    this.body.state = state;
  }
}

module.exports = MediaState;

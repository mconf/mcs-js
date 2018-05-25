'use strict';

const MCSMessage = require('./MCSMessage');

class Unmute extends MCSMessage {
  constructor(mediaId) {
    super();
    this.body.media_id = mediaId;
  }
}

module.exports = Unmute;

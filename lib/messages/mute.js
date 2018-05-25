'use strict';

const MCSMessage = require('./MCSMessage');

class Mute extends MCSMessage {
  constructor(mediaId) {
    super();
    this.body.media_id = mediaId;
  }
}

module.exports = Mute;

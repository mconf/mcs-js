'use strict';

const MCSMessage = require('./MCSMessage');

class SetVolume extends MCSMessage {
  constructor(mediaId, volume) {
    super();
    this.body.media_id = mediaId;
    this.body.volume = volume;
  }
}

module.exports = SetVolume;
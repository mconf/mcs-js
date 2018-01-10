'use strict';

const MCSMessage = require('./MCSMessage');

class VolumeChanged extends MCSMessage {
  constructor(mediaId, volume) {
    super();
    this.body.media_id = mediaId;
    this.body.volume = volume;
  }
}

module.exports = VolumeChanged;

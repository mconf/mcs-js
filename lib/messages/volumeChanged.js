'use strict';

const MCSMessage = require('./MCSMessage');
const C = require('../constants');

class VolumeChanged extends MCSMessage {
  constructor(mediaId, volume) {
    super(C.VOLUME_CHANGED);
    this.body.media_id = mediaId;
    this.body.volume = volume;
  }
}

module.exports = VolumeChanged;

'use strict';

const MCSMessage = require('./MCSMessage');
const C = require('../constants');

class VolumeChanged extends MCSMessage {
  constructor(mediaId, volume) {
    super(C.VOLUME_CHANGED);
    this.body.mediaId = mediaId;
    this.body.volume = volume;
  }
}

module.exports = VolumeChanged;

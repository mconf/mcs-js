'use strict';

const MCSMessage = require('./MCSMessage');
const C = require('../constants');

class SetVolume extends MCSMessage {
  constructor(mediaId, volume) {
    super(C.SET_VOLUME);
    this.body.mediaId = mediaId;
    this.body.volume = volume;
  }
}

module.exports = SetVolume;
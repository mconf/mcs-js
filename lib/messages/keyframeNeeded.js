'use strict';

const MCSMessage = require('./MCSMessage');
const C = require('../constants');

class KeyframeNeeded extends MCSMessage {
  constructor(mediaId) {
    super(C.KEYFRAME_NEEDED);
    this.body.mediaId = mediaId;
  }
}

module.exports = KeyframeNeeded;

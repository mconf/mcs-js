'use strict';

const MCSMessage = require('./MCSMessage');
const C = require('../constants');

class KeyframeRequested extends MCSMessage {
  constructor(mediaId, params) {
    super(C.KEYFRAME_REQUESTED, null, params);
    this.body.mediaId = mediaId;
  }
}

module.exports = KeyframeRequested;

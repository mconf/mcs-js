'use strict';

const MCSMessage = require('./MCSMessage');
const C = require('../constants');

class RequestKeyframe extends MCSMessage {
  constructor(mediaId) {
    super(C.REQUEST_KEYFRAME);
    this.body.mediaId = mediaId;
  }
}

module.exports = RequestKeyframe;

'use strict';

const MCSMessage = require('./MCSMessage');
const C = require('../constants');

class BitrateChange extends MCSMessage {
  constructor(mediaSessionId, suggestedBitrates, descriptor = '') {
    super(C.BITRATE_CHANGE);
    this.body.mediaSessionId = mediaSessionId;
    this.body.suggestedBitrates = suggestedBitrates;
    this.body.descriptor = descriptor;
  }
}

module.exports = BitrateChange;

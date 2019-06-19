'use strict';

const MCSMessage = require('./MCSMessage');
const C = require('../constants');

class DTMFReceived extends MCSMessage {
  constructor(mediaId, tone, params) {
    super(C.DTMF_RECEIVED, null, params);
    this.body.mediaId = mediaId;
    this.body.tone = tone;
  }
}

module.exports = DTMFReceived;

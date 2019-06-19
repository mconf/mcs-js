'use strict';

const MCSMessage = require('./MCSMessage');
const C = require('../constants');

class DTMFSent extends MCSMessage {
  constructor(mediaId, tone, params) {
    super(C.DTMF_SENT, null, params);
    this.body.mediaId = mediaId;
    this.body.tone = tone;
  }
}

module.exports = DTMFSent;

'use strict';

const MCSMessage = require('./MCSMessage');
const C = require('../constants');

class DTMF extends MCSMessage {
  constructor(mediaId, tone, options) {
    super(C.DTMF);
    this.body.mediaId = mediaId;
    this.body.tone = tone;
    this.body.options = options;
  }
}

module.exports = DTMF;

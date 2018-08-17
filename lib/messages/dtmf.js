'use strict';

const MCSMessage = require('./MCSMessage');

class DTMF extends MCSMessage {
  constructor(mediaId, digit) {
    super();
    this.body.mediaId = mediaId;
    this.body.digit = digit;
  }
}

module.exports = DTMF;

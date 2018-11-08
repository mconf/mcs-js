'use strict';

const MCSMessage = require('./MCSMessage');
const C = require('../constants');

class DTMF extends MCSMessage {
  constructor(mediaId, digit) {
    super(C.DTMF);
    this.body.mediaId = mediaId;
    this.body.digit = digit;
  }
}

module.exports = DTMF;

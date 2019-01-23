'use strict';

const MCSMessage = require('./MCSMessage');
const C = require('../constants');

class Unmuted extends MCSMessage {
  constructor(mediaId) {
    super(C.UNMUTED);
    this.body.mediaId = mediaId;
  }
}

module.exports = Unmuted;

'use strict';

const MCSMessage = require('./MCSMessage');
const C = require('../constants');

class Unmute extends MCSMessage {
  constructor(mediaId) {
    super(C.UNMUTE);
    this.body.mediaId = mediaId;
  }
}

module.exports = Unmute;

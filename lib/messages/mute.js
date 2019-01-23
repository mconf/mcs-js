'use strict';

const MCSMessage = require('./MCSMessage');
const C = require('../constants');

class Mute extends MCSMessage {
  constructor(mediaId) {
    super(C.MUTE);
    this.body.mediaId = mediaId;
  }
}

module.exports = Mute;

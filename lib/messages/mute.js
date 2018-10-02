'use strict';

const MCSMessage = require('./MCSMessage');
const C = require('../constants');

class Mute extends MCSMessage {
  constructor(mediaId) {
    super(C.MUTE);
    this.body.media_id = mediaId;
  }
}

module.exports = Mute;

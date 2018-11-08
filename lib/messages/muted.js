'use strict';

const MCSMessage = require('./MCSMessage');
const C = require('../constants');

class Muted extends MCSMessage {
  constructor(mediaId) {
    super(C.MUTED);
    this.body.media_id = mediaId;
  }
}

module.exports = Muted;

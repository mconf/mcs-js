'use strict';

const MCSMessage = require('./MCSMessage');
const C = require('../constants');

class MediaState extends MCSMessage {
  constructor(mediaId, state) {
    super(C.MEDIA_STATE);
    this.body.mediaId = mediaId;
    this.body.state = state;
  }
}

module.exports = MediaState;

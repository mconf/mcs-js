'use strict';

const MCSMessage = require('./MCSMessage');
const C = require('../constants');

class MediaRenegotiated extends MCSMessage {
  constructor(mediaId, media) {
    super(C.MEDIA_RENEGOTIATED);
    this.body.mediaId = mediaId;
    this.body.media = media;
  }
}

module.exports = MediaRenegotiated;

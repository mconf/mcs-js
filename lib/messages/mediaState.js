'use strict';

const MCSMessage = require('./MCSMessage');

class MediaState extends MCSMessage {
  constructor(media, state) {
    super();
    this.body.media = media;
    this.body.state = state;
  }
}

module.exports = MediaState;

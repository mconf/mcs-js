'use strict';

const MCSMessage = require('./MCSMessage');

class OnIceCandidate extends MCSMessage {
  constructor(mediaId, candidate) {
    super();
    this.body.mediaId = mediaId;
    this.body.candidate = candidate;
  }
}

module.exports = OnIceCandidate;

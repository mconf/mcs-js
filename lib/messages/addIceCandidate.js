'use strict';

const MCSMessage = require('./MCSMessage');

class AddIceCandidate extends MCSMessage {
  constructor(mediaId, candidate) {
    super();
    this.body.mediaId = mediaId;
    this.body.candidate = candidate;
  }
}

module.exports = AddIceCandidate;

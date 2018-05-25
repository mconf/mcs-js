'use strict';

const MCSMessage = require('./MCSMessage');

class IceCandidate extends MCSMessage {
  constructor(media, candidate) {
    super();
    this.body.media = media;
    this.body.candidate = candidate;
  }
}

module.exports = IceCandidate;

'use strict';

const MCSMessage = require('./MCSMessage');
const C = require('../constants');

class OnIceCandidate extends MCSMessage {
  constructor(mediaId, candidate) {
    super(C.ON_ICE_CANDIDATE);
    this.body.mediaId = mediaId;
    this.body.candidate = candidate;
  }
}

module.exports = OnIceCandidate;

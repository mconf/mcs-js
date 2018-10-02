'use strict';

const MCSMessage = require('./MCSMessage');
const C = require('../constants');

class AddIceCandidate extends MCSMessage {
  constructor(mediaId, candidate) {
    super(C.ADD_ICE_CANDIDATE);
    this.body.mediaId = mediaId;
    this.body.candidate = candidate;
  }
}

module.exports = AddIceCandidate;

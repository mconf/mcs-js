'use strict';

const MCSMessage = require('./MCSMessage');
const C = require('../constants');

class IceCandidateAdded extends MCSMessage {
  constructor(mediaId, params) {
    super(C.ICE_CANDIDATE_ADDED, null, params);
    this.body.mediaId = mediaId;
    this.body.params = params;
  }
}

module.exports = IceCandidateAdded;

'use strict';

const MCSMessage = require('./MCSMessage');

class IceCandidateAdded extends MCSMessage {
  constructor(mediaId, params) {
    super(null, null, params);
    this.body.mediaId = mediaId;
    this.body.params = params;
  }
}

module.exports = IceCandidateAdded;

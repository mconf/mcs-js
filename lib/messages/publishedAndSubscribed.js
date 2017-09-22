'use strict';

const MCSMessage = require('./MCSMessage');

class PublishedAndSubscribed extends MCSMessage {
  constructor(sdp) {
    super();
    this.body.sdp = sdp;
  }
}

module.exports = PublishedAndSubscribed;

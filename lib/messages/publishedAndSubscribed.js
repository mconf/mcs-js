'use strict';

const MCSMessage = require('./MCSMessage');
const C = require('../constants');

class PublishedAndSubscribed extends MCSMessage {
  constructor(mediaId, descriptor, params) {
    super(C.PUBLISHED_AND_SUBSCRIBED, null, params);
    this.body.mediaId = mediaId;
    this.body.descriptor = descriptor;
  }
}

module.exports = PublishedAndSubscribed;

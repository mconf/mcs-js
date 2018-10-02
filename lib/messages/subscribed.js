'use strict';

const MCSMessage = require('./MCSMessage');
const C = require('../constants');

class Subscribed extends MCSMessage {
  constructor(mediaId, descriptor, params) {
    super(C.SUBSCRIBED, null, params);
    this.body.mediaId = mediaId;
    this.body.descriptor = descriptor;
  }
}

module.exports = Subscribed;

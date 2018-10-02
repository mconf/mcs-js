'use strict';

const MCSMessage = require('./MCSMessage');
const C = require('../constants');

class Published extends MCSMessage {
  constructor(mediaId, descriptor, params) {
    super(C.PUBLISHED, null, params);
    this.body.mediaId = mediaId;
    this.body.descriptor = descriptor;
  }
}

module.exports = Published;

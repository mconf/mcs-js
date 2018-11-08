'use strict';

const MCSMessage = require('./MCSMessage');
const C = require('../constants');

class Unpublish extends MCSMessage {
  constructor(userId, mediaId) {
    super(C.UNPUBLISH);
    this.body.mediaId = mediaId;
    this.body.userId = userId;
  }
}

module.exports = Unpublish;

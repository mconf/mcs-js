'use strict'

const MCSMessage = require('./MCSMessage');

class UnpublishAndSubscribe extends MCSMessage {
  constructor(media_id) {
    super();
    this.body.media_id = media_id;
  }
}

module.exports = UnpublishAndSubscribe;

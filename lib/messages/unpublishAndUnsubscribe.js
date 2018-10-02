'use strict';

const MCSMessage = require('./MCSMessage');
const C = require('../constants');

class UnpublishAndUnsubscribe extends MCSMessage {
  constructor(media_id, params) {
    super(C.UNPUBLISH_AND_UNSUBSCRIBE);
    this.body.media_id = media_id;
    this.body.params = params;
  }
}

module.exports = UnpublishAndUnsubscribe;

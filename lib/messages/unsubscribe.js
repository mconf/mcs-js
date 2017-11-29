'use strict';

const MCSMessage = require('./MCSMessage');

class Unsubscribe extends MCSMessage {
  constructor(media_id, params) {
    super();
    this.body.media_id = media_id;
    this.body.params = params;
  }
}

module.exports = Unsubscribe;

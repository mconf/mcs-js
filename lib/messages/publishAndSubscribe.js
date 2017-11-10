'use strict';

const MCSMessage = require('./MCSMessage');

class PublishAndSubscribe extends MCSMessage {
  constructor(source_id, media_id, type, params) {
    super();
    this.body.source_id = source_id;
    this.body.media_id = media_id;
    this.body.type = type;
    this.body.params = params;
  }
}

module.exports = PublishAndSubscribe;

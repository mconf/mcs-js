'use strict';

const MCSMessage = require('./MCSMessage');

class Connect extends MCSMessage {
  constructor(sourceMediaId, sinkMediaIds, params) {
    super();
    this.body.source_id = sourceMediaId ;
    this.body.sink_ids = sinkMediaIds;
    this.body.params = params;
  }
}

module.exports = Connect;

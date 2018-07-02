'use strict';

const MCSMessage = require('./MCSMessage');

class Disconnect extends MCSMessage {
  constructor(sourceMediaId, sinkMediaIds, params) {
    super();
    this.body.source_id = sourceMediaId ;
    this.body.sink_ids = sinkMediaIds;
    this.body.params = params;
  }
}

module.exports = Disconnect;

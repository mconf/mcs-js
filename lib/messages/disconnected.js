'use strict';

const MCSMessage = require('./MCSMessage');

class Disconnected extends MCSMessage {
  constructor(sourceId, sinkIds) {
    super();
    this.body.source_id = sourceId;
    this.body.sink_ids = sinkIds;
  }
}

module.exports = Disconnected;

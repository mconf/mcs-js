'use strict';

const MCSMessage = require('./MCSMessage');
const C = require('../constants');

class Disconnected extends MCSMessage {
  constructor(sourceId, sinkIds) {
    super(C.DISCONNECTED);
    this.body.source_id = sourceId;
    this.body.sink_ids = sinkIds;
  }
}

module.exports = Disconnected;

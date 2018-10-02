'use strict';

const MCSMessage = require('./MCSMessage');
const C = require('../constants');

class Connected extends MCSMessage {
  constructor(sourceId, sinkIds) {
    super(C.CONNECTED);
    this.body.source_id = sourceId;
    this.body.sink_ids = sinkIds;
  }
}

module.exports = Connected;

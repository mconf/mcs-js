'use strict';

const MCSMessage = require('./MCSMessage');
const C = require('../constants');

class Connected extends MCSMessage {
  constructor(sourceId, sinkIds, params) {
    super(C.SUBSCRIBED, null, params);
    this.body.source_id = sourceId;
    this.body.sink_ids = sinkIds;
  }
}

module.exports = Connected;

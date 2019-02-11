'use strict';

const MCSMessage = require('./MCSMessage');
const C = require('../constants');

class Disconnect extends MCSMessage {
  constructor(sourceMediaId, sinkMediaIds, type) {
    super(C.DISCONNECT);
    this.body.source_id = sourceMediaId ;
    this.body.sink_ids = sinkMediaIds;
    this.body.type = type;
  }
}

module.exports = Disconnect;

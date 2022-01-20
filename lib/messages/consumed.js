'use strict';

const MCSMessage = require('./MCSMessage');
const { CONSUMED } = require('../constants');

class Consumed extends MCSMessage {
  constructor(sourceMediaId, sinkMediaId, remoteDescriptor, params) {
    super(CONSUMED, null, params);
    this.body = {
      sourceMediaId,
      sinkMediaId,
      remoteDescriptor
    }
  }
}

module.exports = Consumed;

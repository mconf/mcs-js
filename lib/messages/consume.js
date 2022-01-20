'use strict';

const MCSMessage = require('./MCSMessage');
const { CONSUME } = require('../constants');

class Consume extends MCSMessage {
  constructor(sourceMediaId, sinkMediaId, type) {
    super(CONSUME);
    this.body = {
      sourceMediaId,
      sinkMediaId,
      type,
    };
  }
}

module.exports = Consume;

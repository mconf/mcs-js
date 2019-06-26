'use strict';

const MCSMessage = require('./MCSMessage');
const C = require('../constants');

class CurrentStrategy extends MCSMessage {
  constructor(identifier, strategy, params) {
    super(C.CURRENT_STRATEGY, null, params);
    this.body.identifier = identifier;
    this.body.strategy = strategy;
  }
}

module.exports = CurrentStrategy;

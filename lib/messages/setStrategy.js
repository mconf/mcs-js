'use strict';

const MCSMessage = require('./MCSMessage');
const C = require('../constants');

class SetStrategy extends MCSMessage {
  constructor(identifier, strategy, params) {
    super(C.SET_STRATEGY);
    this.body.identifier = identifier;
    this.body.strategy = strategy;
    this.body.params = params;
  }
}

module.exports = SetStrategy;

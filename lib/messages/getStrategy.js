'use strict';

const MCSMessage = require('./MCSMessage');
const C = require('../constants');

class GetStrategy extends MCSMessage {
  constructor(identifier) {
    super(C.GET_STRATEGY);
    this.body.identifier = identifier;
  }
}

module.exports = GetStrategy;

'use strict';

const MCSMessage = require('./MCSMessage');
const C = require('../constants');

class OnEvent extends MCSMessage {
  constructor(eventName, identifier) {
    super(C.ON_EVENT);
    this.body.eventName = eventName;
    this.body.identifier = identifier;
  }
}

module.exports = OnEvent;

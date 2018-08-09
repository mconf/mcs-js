'use strict';

const MCSMessage = require('./MCSMessage');

class OnEvent extends MCSMessage {
  constructor(eventName, identifier) {
    super();
    this.body.eventName = eventName;
    this.body.identifier = identifier;
  }
}

module.exports = OnEvent;

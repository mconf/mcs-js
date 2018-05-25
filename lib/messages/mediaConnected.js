'use strict';

const MCSMessage = require('./MCSMessage');

class MediaConnected extends MCSMessage {
  constructor(id, userId, name, muted, flowType, flowDirection) {
    super();
    this.body.id = id;
    this.body.userId = userId;
    this.body.name = name;
    this.body.muted = muted;
    this.body.flowType = flowType;
    this.body.flowDirection = flowDirection;
  }
}

module.exports = MediaConnected;

'use strict';

const MCSMessage = require('./MCSMessage');
const C = require('../constants');

class StopRecording extends MCSMessage {
  constructor(userId, recordingId, params) {
    super(C.STOP_RECORDING);
    this.body.userId = userId;
    this.body.recordingId = recordingId;
    this.body.params = params;
  }
}

module.exports = StopRecording;

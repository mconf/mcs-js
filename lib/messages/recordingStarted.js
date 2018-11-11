'use strict';

const MCSMessage = require('./MCSMessage');
const C = require('../constants');

class RecordingStarted extends MCSMessage {
  constructor(recordingId, params) {
    super(C.RECORDING_STARTED, null, params);
    this.body.recordingId = recordingId;
  }
}

module.exports = RecordingStarted;

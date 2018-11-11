'use strict';

const MCSMessage = require('./MCSMessage');
const C = require('../constants');

class RecordingStopped extends MCSMessage {
  constructor(recordingId, params) {
    super(C.RECORDING_STOPPED, null, params);
    this.body.recordingId = recordingId;
  }
}

module.exports = RecordingStopped;

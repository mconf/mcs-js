'use strict';

const MCSMessage = require('./MCSMessage');
const C = require('../constants');

class StartRecording extends MCSMessage {
  constructor(userId, mediaId, recordingPath, params) {
    super(C.START_RECORDING);
    this.body.userId = userId;
    this.body.mediaId = mediaId;
    this.body.recordingPath = recordingPath;
    this.body.params = params;
  }
}

module.exports = StartRecording;

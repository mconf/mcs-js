'use strict';

const MCSMessage = require('./MCSMessage');
const { RESTART_ICE } = require('../constants');

class RestartIce extends MCSMessage {
  constructor(mediaId) {
    super(RESTART_ICE);
    this.body = {
      mediaId,
    }
  }
}

module.exports = RestartIce;

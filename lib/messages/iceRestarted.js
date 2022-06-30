'use strict';

const MCSMessage = require('./MCSMessage');
const { ICE_RESTARTED }  = require('../constants');

class IceRestarted extends MCSMessage {
  constructor(mediaId, descriptor, options) {
    super(ICE_RESTARTED, null, options);
    this.body = {
      mediaId,
      descriptor,
    }
  }
}

module.exports = IceRestarted;

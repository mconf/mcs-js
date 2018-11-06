'use strict';

const MCSMessage = require('./MCSMessage');

class ErrorMessage extends MCSMessage {
  constructor(response, params) {
    super(null, null, params);
    this.body.response = response;
  }
}

module.exports = ErrorMessage;

'use strict';

const MCSMessage = require('./MCSMessage');
const C = require('../constants');

class ErrorMessage extends MCSMessage {
  constructor(response, params) {
    super(C.ERROR, null, params);
    this.body.response = response;
  }
}

module.exports = ErrorMessage;

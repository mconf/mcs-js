'use strict';

const MCSMessage = require('./MCSMessage');

class Unpublished extends MCSMessage {
  constructor() {
    super();
  }
}

module.exports = Unpublished;

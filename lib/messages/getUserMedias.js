'use strict';

const MCSMessage = require('./MCSMessage');

class getUserMedias extends MCSMessage {
  constructor(user) {
    super();
    this.body.user = user ;
  }
}

module.exports = getUserMedias;

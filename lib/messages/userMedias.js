'use strict';

const MCSMessage = require('./MCSMessage');

class UserMedias extends MCSMessage {
  constructor(medias) {
    super();
    this.body.medias = medias;
  }
}

module.exports = UserMedias;

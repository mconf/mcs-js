'use strict';

const MCSMessage = require('./MCSMessage');

class UserMedias extends MCSMessage {
  constructor(medias, params) {
    super(null, null, params);
    super();
    this.body.medias = medias;
  }
}

module.exports = UserMedias;

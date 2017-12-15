'use strict';

const MCSMessage = require('./MCSMessage');

class userMedias extends MCSMessage {
  constructor(medias) {
    super();
    this.body.medias = medias;
  }
}

module.exports = userMedias;

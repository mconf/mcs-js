'use strict';

const mcsmessage = require('./mcsmessage');

class userMedias extends mcsmessage {
  constructor(medias) {
    super();
    this.body.medias = medias;
  }
}

module.exports = userMedias;

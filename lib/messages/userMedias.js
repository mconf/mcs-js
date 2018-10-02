'use strict';

const MCSMessage = require('./MCSMessage');
const C = require('../constants');

class UserMedias extends MCSMessage {
  constructor(medias, params) {
    super(null, null, params);
    super(C.USER_MEDIAS);
    this.body.medias = medias;
  }
}

module.exports = UserMedias;

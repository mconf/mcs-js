'use strict';

const MCSMessage = require('./MCSMessage');
const C = require('../constants');

class UserMedias extends MCSMessage {
  constructor(medias, params) {
    super(C.USER_MEDIAS, null, params);
    this.body.medias = medias;
  }
}

module.exports = UserMedias;

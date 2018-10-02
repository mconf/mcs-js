'use strict';

const MCSMessage = require('./MCSMessage');
const C = require('../constants');

class getUserMedias extends MCSMessage {
  constructor(userId) {
    super(C.GET_USER_MEDIAS);
    this.body.userId = userId;
  }
}

module.exports = getUserMedias;

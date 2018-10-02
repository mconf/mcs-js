'use strict';

const MCSMessage = require('./MCSMessage');
const C = require('../constants');

class Subscribe extends MCSMessage {
  constructor(user, source, type, params) {
    super(C.SUBSCRIBE);
    this.body.user = user;
    this.body.source = source ;
    this.body.type = type;
    this.body.params = params;
  }
}

module.exports = Subscribe;

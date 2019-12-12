'use strict';

const MCSMessage = require('./MCSMessage');
const C = require('../constants');

class getMedias extends MCSMessage {
  constructor(memberType, identifier, options = {}) {
    super(C.GET_MEDIAS);
    this.body.memberType = memberType;
    this.body.identifier = identifier;
    this.body.options = options
  }
}

module.exports = getMedias;

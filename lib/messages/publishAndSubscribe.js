'use strict';

const MCSMessage = require('./MCSMessage');
const C = require('../constants');

class PublishAndSubscribe extends MCSMessage {
  constructor(user, room, source, type, params) {
    super(C.PUBLISH_AND_SUBSCRIBE);
    this.body.user = user;
    this.body.room = room;
    this.body.source = source;
    this.body.type = type;
    this.body.params = params;
  }
}

module.exports = PublishAndSubscribe;

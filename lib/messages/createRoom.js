'use strict';

const MCSMessage = require('./MCSMessage');
const { CREATE_ROOM } = require('../constants');

class CreateRoom extends MCSMessage {
  constructor(options) {
    super(CREATE_ROOM);
    this.body = {
      options,
    };
  }
}

module.exports = CreateRoom;

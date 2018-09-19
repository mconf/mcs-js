'use strict';

const MCSMessage = require('./MCSMessage');

class GetRooms extends MCSMessage {
  constructor() {
    super();
  }
}

module.exports = GetRooms;

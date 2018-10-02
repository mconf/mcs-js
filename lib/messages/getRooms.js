'use strict';

const MCSMessage = require('./MCSMessage');
const C = require('../constants');

class GetRooms extends MCSMessage {
  constructor() {
    super(C.GET_ROOMS);
  }
}

module.exports = GetRooms;

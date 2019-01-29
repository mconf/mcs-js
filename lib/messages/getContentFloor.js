'use strict';

const MCSMessage = require('./MCSMessage');
const C = require('../constants');

class getContentFloor extends MCSMessage {
    constructor(roomId) {
        super(C.GET_CONTENT_FLOOR);
        this.body.roomId = roomId;
    }
}

module.exports = getContentFloor;

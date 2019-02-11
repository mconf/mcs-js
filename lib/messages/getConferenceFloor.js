'use strict';

const MCSMessage = require('./MCSMessage');
const C = require('../constants');

class getConferenceFloor extends MCSMessage {
    constructor(roomId) {
        super(C.GET_CONFERENCE_FLOOR);
        this.body.roomId = roomId;
    }
}

module.exports = getConferenceFloor;

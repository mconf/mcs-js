'use strict';

const MCSMessage = require('./MCSMessage');
const C = require('../constants');

class getConferenceFloor extends MCSMessage {
    constructor(roomId, mediaId) {
        super(C.GET_CONFERENCE_FLOOR);
        this.body.roomId = roomId;
        this.body.mediaId = mediaId
    }
}

module.exports = getConferenceFloor;

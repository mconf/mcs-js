'use strict';

const MCSMessage = require('./MCSMessage');
const C = require('../constants');

class releaseConferenceFloor extends MCSMessage {
    constructor(roomId, mediaId) {
        super(C.RELEASE_CONFERENCE_FLOOR);
        this.body.roomId = roomId
    }
}

module.exports = releaseConferenceFloor;

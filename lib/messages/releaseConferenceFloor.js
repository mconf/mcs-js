'use strict';

const MCSMessage = require('./MCSMessage');
const C = require('../constants');

class releaseConferenceFloor extends MCSMessage {
    constructor(roomId, mediaId) {
        super(C.RELEASE_CONFERENCE_FLOOR);
        this.body.room_id = roomId
        this.body.media_id = mediaId;
    }
}

module.exports = releaseConferenceFloor;
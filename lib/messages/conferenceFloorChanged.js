'use strict';

const MCSMessage = require('./MCSMessage');

class conferenceFloorChanged extends MCSMessage {
    constructor(roomId, mediaId) {
        super();
        this.body.room_id = roomId;
        this.body.media_id = mediaId
    }
}

module.exports = conferenceFloorChanged;
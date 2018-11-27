'use strict';

const MCSMessage = require('./MCSMessage');
const C = require('../constants');

class releaseContentFloor extends MCSMessage {
    constructor(roomId, mediaId) {
        super(C.RELEASE_CONTENT_FLOOR);
        this.body.room_id = roomId
        this.body.media_id = mediaId;
    }
}

module.exports = releaseContentFloor;
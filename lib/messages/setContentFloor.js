'use strict';

const MCSMessage = require('./MCSMessage');
const C = require('../constants');

class setContentFloor extends MCSMessage {
    constructor(roomId, mediaId) {
        super(C.SET_CONTENT_FLOOR);
        this.body.room_id = roomId
        this.body.media_id = mediaId;
    }
}

module.exports = setContentFloor;
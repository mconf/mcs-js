'use strict';

const MCSMessage = require('./MCSMessage');
const C = require('../constants');

class contentFloorChanged extends MCSMessage {
    constructor(roomId, mediaId, params) {
        super(C.CONTENT_FLOOR_CHANGED, null, params);
        this.body.room_id = roomId;
        this.body.media_id = mediaId
    }
}

module.exports = contentFloorChanged;

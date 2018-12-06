'use strict';

const MCSMessage = require('./MCSMessage');
const C = require('../constants');

class getContentFloor extends MCSMessage {
    constructor(roomId, mediaId) {
        super(C.GET_CONTENT_FLOOR);
        this.body.roomId = roomId;
        this.body.mediaId = mediaId
    }
}

module.exports = getContentFloor;

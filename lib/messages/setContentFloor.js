'use strict';

const MCSMessage = require('./MCSMessage');
const C = require('../constants');

class setContentFloor extends MCSMessage {
    constructor(roomId, mediaId) {
        super(C.SET_CONTENT_FLOOR);
        this.body.roomId = roomId
        this.body.mediaId = mediaId;
    }
}

module.exports = setContentFloor;

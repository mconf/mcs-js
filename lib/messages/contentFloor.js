'use strict';

const MCSMessage = require('./MCSMessage');
const C = require('../constants');

class contentFloor extends MCSMessage {
    constructor(roomId, mediaId, params) {
        super(C.CONTENT_FLOOR, null, params);
        this.body.roomId  = roomId;
        this.body.mediaId = mediaId
    }
}

module.exports = contentFloor;

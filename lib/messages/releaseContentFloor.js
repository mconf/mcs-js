'use strict';

const MCSMessage = require('./MCSMessage');
const C = require('../constants');

class releaseContentFloor extends MCSMessage {
    constructor(roomId, mediaId) {
        super(C.RELEASE_CONTENT_FLOOR);
        this.body.roomId = roomId
    }
}

module.exports = releaseContentFloor;

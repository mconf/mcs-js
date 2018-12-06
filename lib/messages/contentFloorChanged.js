'use strict';

const MCSMessage = require('./MCSMessage');
const C = require('../constants');

class contentFloorChanged extends MCSMessage {
    constructor(roomId, media, params) {
        super(C.CONTENT_FLOOR_CHANGED, null, params);
        this.body.roomId = roomId;
        this.body.media = media;
    }
}

module.exports = contentFloorChanged;

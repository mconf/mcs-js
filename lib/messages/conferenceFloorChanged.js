'use strict';

const MCSMessage = require('./MCSMessage');
const C = require('../constants');

class conferenceFloorChanged extends MCSMessage {
    constructor(roomId, media, params) {
        super(C.CONFERENCE_FLOOR_CHANGED, null, params);
        this.body.roomId = roomId;
        this.body.media = media
    }
}

module.exports = conferenceFloorChanged;

'use strict';
const MCSMessage = require('./MCSMessage');
class conferenceFloor extends MCSMessage {
    constructor(roomId, mediaId, params) {
        super(C.CONFERENCE_FLOOR, null, params);
        this.body.roomId = roomId;
        this.body.mediaId = mediaId
    }
}
module.exports = conferenceFloor;

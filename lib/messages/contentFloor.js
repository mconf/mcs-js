'use strict';
const MCSMessage = require('./MCSMessage');
class contentFloor extends MCSMessage {
    constructor(roomId, mediaId) {
        super(C.CONTENT_FLOOR);
        this.body.room_id = roomId;
        this.body.media_id = mediaId
    }
}
module.exports = contentFloor; 
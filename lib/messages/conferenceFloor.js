'use strict';
const MCSMessage = require('./MCSMessage');

class conferenceFloor extends MCSMessage {
    constructor(roomId, floor, previousFloor, params) {
        super(C.CONFERENCE_FLOOR, null, params);
        this.body.roomId = roomId;
        this.body.floor = floor;
        this.body.previousFloor = previousFloor;
    }
}

module.exports = conferenceFloor;

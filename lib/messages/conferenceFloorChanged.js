'use strict';

const MCSMessage = require('./MCSMessage');
const C = require('../constants');

class conferenceFloorChanged extends MCSMessage {
    constructor(roomId, floor, previousFloor, params) {
        super(C.CONFERENCE_FLOOR_CHANGED, null, params);
        this.body.roomId = roomId;
        this.body.floor = floor;
        this.body.previousFloor = previousFloor;
    }
}

module.exports = conferenceFloorChanged;

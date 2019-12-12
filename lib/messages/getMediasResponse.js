'use strict';

const MCSMessage = require('./MCSMessage');
const C = require('../constants');

class GetMediasResponse extends MCSMessage {
  constructor(medias, options) {
    super(C.GET_MEDIAS_RESPONSE, null, options);
    this.body.medias = medias;
  }
}

module.exports = GetMediasResponse;

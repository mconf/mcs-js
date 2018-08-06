'use strict';

const MCSBaseClient = require('./MCSBaseClient');
const MCSTransactionManager = require('./MCSTransactionManager');

const JoinMessage = require('./messages/join');
const LeaveMessage = require('./messages/leave');
const PublishAndSubscribeMessage = require('./messages/publishAndSubscribe');
const UnpublishAndUnsubscribeMessage = require('./messages/unpublishAndUnsubscribe');
const GetUsersMessage = require('./messages/getUsers');
const GetUserMediasMessage = require('./messages/getUserMedias');
const MuteMessage = require('./messages/mute');
const UnmuteMessage = require('./messages/unmute');
const AddIceCandidateMessage = require('./messages/addIceCandidate');
const PublishMessage = require('./messages/publish');
const UnpublishMessage = require('./messages/unpublish');
const SubscribeMessage = require('./messages/subscribe');
const UnsubscribeMessage = require('./messages/unsubscribe');
const SetVolumeMessage = require('./messages/setVolume');
const ConnectMessage = require('./messages/connect');
const DisconnectMessage = require('./messages/disconnect');

/**
 * This class handles connection to Media Control Server application
 * @extends module:mcs-js.MCSBaseClient
 * @memberof module:mcs-js
 * @fires {@link module:mcs-js#event:joined joined}
 */
class MCSClient extends MCSBaseClient {
  /**
   * Create a client for the Media Control Server specified by the given URI
   * @param  {String}   uri      The WebSocket URI of the Media Control Server
   */
  constructor (uri) {
    super();
    this.createConnection(uri);
  }

  deferTransaction (message) {
    MCSTransactionManager.addTransaction(message);
    this.send(message);
    return message.promise;
  }

  /**
   * Join MCS room
   * @param  {String}   roomId  The id of the room
   * @param  {String}   username The name of this user
   * @param  {Object}   params   Additional parameters
   */
  join (roomId, type, params) {
    if (!roomId || typeof(roomId) !== 'string') {
      throw new Error('Error : Invalid roomId');
    }

    if(!type || typeof(type) !== 'string') {
      throw new Error('Error : Invalid type');
    }

    const message = new JoinMessage(roomId, type, params);
    if (message) {
      return this.deferTransaction(message);
    }
  }

  /**
   * Publish stream to Media Control Server and subscribe to the media specified
   * by the mediaId
   * @param  {String}   sourceId The source where user is subscribing to
   * @param  {String}   mediaId The id of the media where user is subscribing to
   * @param  {String}   type    The type of media/stream that user is going to
   *   use to comunicate with the server (WEBRTC or RTP)
   * @param  {module:mcs-js#PublishAndSubscribeParams}   params
   *   Additional parameters
   */
  publishAndSubscribe (sourceId, mediaId, type, params) {
    if (!sourceId || typeof(sourceId) !== 'string') {
      throw new Error('Error : Invalid sourceId');
    }

    if (!mediaId || typeof(mediaId) !== 'string') {
      throw new Error('Error : Invalid mediaId');
    }

    if (!type || typeof(type) !== 'string') {
      throw new Error('Error : Invalid media type');
    }

    if (!params || !params.descriptor) {
      throw new Error('Error: invalid descriptor')
    }

    const message =
      new PublishAndSubscribeMessage(sourceId, mediaId, type, params);

    if (message) {
      return this.deferTransaction(message);
    }
  }

  /**
   * Stop publishing and subscribing to/from the stream given by mediaId
   * @param  {String}   mediaId The id of the media that it is unsubcribing to
   * @param  {Object}   [params]   Additional parameters
   */
  unpublishAndUnsubscribe (mediaId, params) {
    if (!mediaId || typeof(mediaId) !== 'string') {
      throw new Error('Error : Invalid mediaId');
    }

    const message =
      new UnpublishAndUnsubscribeMessage(mediaId, params);

    if (message) {
      return this.deferTransaction(message);
    }
  }

  /**
   *  TODO docs
   */
  publish (user, room, type, params) {
    if (!user || typeof(user) !== 'string') {
      throw new Error('Error : invalid user');
    }

    if (!room || typeof(room) !== 'string') {
      throw new Error('Error : invalid room');
    }

    if (!params || !params.descriptor) {
      throw new Error('Error: invalid descriptor')
    }

    const message =
      new PublishMessage(user, room, type, params);

    if (message) {
      return this.deferTransaction(message);
    }
  }

  /**
   *  TODO docs
   */
  subscribe (user, source, type, params) {
    if (!user || typeof(user) !== 'string') {
      throw new Error('Error : invalid user');
    }

    if (!source || typeof(source) !== 'string') {
      throw new Error('Error : invalid source media ID');
    }

    if (!type || typeof type !== 'string') {
      throw new Error('Error: invalid type');
    }

    if (!params || !params.descriptor) {
      throw new Error('Error: invalid descriptor')
    }

    const message =
      new SubscribeMessage(user, source, type, params);

    if (message) {
      return this.deferTransaction(message);
    }
  }

  /**
   * Leave a room of Media Control Server
   * @param  {String}   roomId The id of the room
   * @param  {Object}   params   Additional parameters
   */
  leave (roomId, params) {
    if (!roomId || typeof(roomId) !== 'string') {
      throw new Error('Invalid roomId');
    }

    const message = new LeaveMessage(roomId, params);

    if (message) {
      return this.deferTransaction(message);
    }
  }

  /**
   * Gets active users from a room
   * @param  {String}   roomId The id of the room
   */
  getUsers (roomId) {
    if (!roomId || typeof(roomId) !== 'string') {
      throw new Error('Invalid roomId');
    }

    const message = new GetUsersMessage(roomId);

    if (message) {
      return this.deferTransaction(message);
    }
  }

  /**
   * Gets medias from a user of the Media Control Server
   * @param  {String}   userId The id of theuser
   */
  getUserMedias (userId) {
    if (!userId || typeof(userId) !== 'string') {
      throw new Error('Invalid userId');
    }

    const message = new GetUserMediasMessage(userId);
    if (message) {
      return this.deferTransaction(message);
    }
  }

  /**
   * Mute a media of the Media Control Server
   * @param  {String}   mediaId The id of media to be muted
   */
  mute (mediaId) {
    if (!mediaId || typeof(mediaId) !== 'string') {
      throw new Error('Invalid mute mediaId');
    }

    const message = new MuteMessage(mediaId);
    if (message) {
      return this.deferTransaction(message);
    }
  }

  /**
   * Unmute a media of the Media Control Server
   * @param  {String}   mediaId The id of media to be unmuted
   */
  unmute (mediaId) {
    if (!mediaId || typeof(mediaId) !== 'string') {
      throw new Error('Invalid unmute mediaId');
    }

    const message = new UnmuteMessage(mediaId);
    if (message) {
      return this.deferTransaction(message);
    }
  }

  /**
   * Change volume of a media of the Media Control Server
   * @param  {String}   mediaId The id of media to be changed
   * @param  {Number}   volume New volume of the media
   */
  setVolume (mediaId, volume) {
    if (!mediaId || typeof(mediaId) !== 'string') {
      throw new Error('Invalid setVolume mediaId');
    }
    if (volume === null || typeof(volume) !== 'number') {
      throw new Error('Invalid volume type');
    }
    if (volume < 0 || volume > 100) {
      throw new Error('Invalid volume value');
    }

    const message = new SetVolumeMessage(mediaId, volume);
    if (message) {
      return this.deferTransaction(message);
    }
  }

  /**
   * Connect sourceMediaId to every mediaId present in sinkMediaIds in Media Control Server.
   * Any data in the source media will be redirected to the sinks
   * @param  {String}   sourceMediaId The id of the source media
   * @param {Array<String>}  mediaSinkIds destination media ids
   */
  connect (sourceMediaId, sinkMediaIds) {
    if (!sourceMediaId || typeof(sourceMediaId) !== 'string') {
      throw new Error('Invalid connect sourceMediaId');
    }
    if (sinkMediaIds === null || typeof(sinkMediaIds) !== 'object') {
      throw new Error('Invalid connect sinkMediaIds type');
    }
    sinkMediaIds.forEach(sinkId => {
      if (sinkId === null || typeof (sinkId) !== 'string') {
        throw new Error('Error : Invalid connect Sink Media ID');
      }
    });

    const message = new ConnectMessage(sourceMediaId, sinkMediaIds);
    if (message) {
      return this.deferTransaction(message);
    }
  }

  /**
   * Disconnect sourceMediaId from every mediaId present in sinkMediaIds in Media Control Server.
   * @param  {String}   sourceMediaId The id of the source media
   * @param {Array<String>}  mediaSinkIds destination media ids
   */
  disconnect (sourceMediaId, sinkMediaIds) {
    if (!sourceMediaId || typeof(sourceMediaId) !== 'string') {
      throw new Error('Invalid disconnect sourceMediaId');
    }
    if (sinkMediaIds === null || typeof(sinkMediaIds) !== 'object') {
      throw new Error('Invalid disconnect sinkMediaIds type');
    }
    sinkMediaIds.forEach(sinkId => {
      if (sinkId === null || typeof (sinkId) !== 'string') {
        throw new Error('Error : Invalid disconnect Sink Media ID');
      }
    });

    const message = new DisconnectMessage(sourceMediaId, sinkMediaIds);
    if (message) {
      return this.deferTransaction(message);
    }
  }

  /*
   * TODO docs
   */
  addIceCandidate (mediaId, candidate) {
    if (!mediaId || typeof(mediaId) !== 'string') {
      throw new Error('Error : invalid mediaId');
    }

    if (!candidate || typeof(candidate) !== 'object') {
      throw new Error('Error : invalid ICE candidate');
    }

    const message =
      new AddIceCandidateMessage(mediaId, candidate);

    if (message) {
      return this.deferTransaction(message);
    }
  }
}

/**
 * @ignore
 */
MCSClient.prototype.send;

/**
 * @ignore
 */
MCSClient.prototype.createConnection;

module.exports = MCSClient;

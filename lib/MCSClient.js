'use strict';

const MCSBaseClient = require('./MCSBaseClient');

const JoinMessage = require('./messages/join');
const LeaveMessage = require('./messages/leave');
const PublishAndSubscribeMessage = require('./messages/publishAndSubscribe');
const UnpublishAndUnsubscribeMessage = require('./messages/unpublishAndUnsubscribe');
const GetUsersMessage = require('./messages/getUsers');
const GetUserMediasMessage = require('./messages/getUserMedias');
const MuteMessage = require('./messages/mute');
const UnmuteMessage = require('./messages/unmute');
const IceCandidateMessage = require('./messages/iceCandidate');
const PublishMessage = require('./messages/publish');
const UnpublishMessage = require('./messages/unpublish');
const SubscribeMessage = require('./messages/subscribe');
const UnsubscribeMessage = require('./messages/unsubscribe');
const SetVolumeMessage = require('./messages/setVolume');

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

  /**
   * Join MCS room
   * @param  {String}   roomId  The id of the room
   * @param  {String}   username The name of this user
   * @param  {Object}   params   Additional parameters
   */
  join (roomId, username, params) {
    if (!roomId || typeof(roomId) !== 'string') {
      throw new Error('Error : Invalid roomId');
    }

    if(!username || typeof(username) !== 'string') {
      throw new Error('Error : Invalid username');
    }

    var joinMessage = new JoinMessage(roomId, username, params);
    if (joinMessage) {
      this.send(joinMessage);
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

    var pubAndSubMessage =
      new PublishAndSubscribeMessage(sourceId, mediaId, type, params);
    if (pubAndSubMessage) {
      this.send(pubAndSubMessage);
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

    var unpubAndUnsubMessage =
      new UnpublishAndUnsubscribeMessage(mediaId, params);
    if (unpubAndUnsubMessage) {
      this.send(unpubAndUnsubMessage);
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

    var leaveMessage = new LeaveMessage(roomId, params);
    if (leaveMessage) {
      this.send(leaveMessage);
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

    var getUsersMessage = new GetUsersMessage(roomId);
    if (getUsersMessage) {
      this.send(getUsersMessage);
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

    var getUserMediasMessage = new GetUserMediasMessage(userId);
    if (getUserMediasMessage) {
      this.send(getUserMediasMessage);
    }
  }

  mute (mediaId) {
    if (!mediaId || typeof(mediaId) !== 'string') {
      throw new Error('Invalid mute mediaId');
    }

    var muteMessage = new MuteMessage(mediaId);
    if (muteMessage) {
      this.send(muteMessage);
    }
  }

  unmute (mediaId) {
    if (!mediaId || typeof(mediaId) !== 'string') {
      throw new Error('Invalid unmute mediaId');
    }

    var unmuteMessage = new UnmuteMessage(mediaId);
    if (unmuteMessage) {
      this.send(unmuteMessage);
    }
  }

  setVolume (mediaId, volume) {
    if (!mediaId || typeof(mediaId) !== 'string') {
      throw new Error('Invalid setolume mediaId');
    }
    if (!volume || typeof(volume) !== 'number') {
      throw new Error('Invalid volume type');
    }
    if (volume < 0 || volume > 100) {
      throw new Error('Invalid volume value');
    }

    var setVolumeMessage = new SetVolumeMessage(mediaId, volume);
    if (SetVolumeMessage) {
      this.send(SetVolumeMessage);
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

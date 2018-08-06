'use strict';

const MCSBaseClient = require('./MCSBaseClient');

const JoinedMessage = require('./messages/joined');
const LeftMessage = require('./messages/left');
const PublishedAndSubscribed = require('./messages/publishedAndSubscribed');
const UnpublishedAndUnsubscribed = require('./messages/unpublishedAndUnsubscribed');
const UsersList = require('./messages/usersList');
const UserMedias = require('./messages/userMedias');
const UserJoined = require('./messages/userJoined');
const UserLeft = require('./messages/userLeft');
const Muted = require('./messages/muted');
const Unmuted = require('./messages/unmuted');
const MediaConnected = require('./messages/mediaConnected');
const MediaDisconnected = require('./messages/mediaDisconnected');
const VolumeChanged = require('./messages/volumeChanged');
const Connected = require('./messages/connected');
const Disconnected = require('./messages/disconnected');
const Published = require('./messages/published');
//const Subscribed = require('./messages/Subscribed');

/**
 * This class represents a client in server's context. It is used to
 * send/receive data from a single client
 * @extends module:mcs-js.MCSBaseClient
 * @memberof module:mcs-js
 * @fires {@link module:mcs-js#event:join join}
 */
class MCSResponseClient extends MCSBaseClient {
  /**
   * Create a client for the Media Control Server given an existent connection
   * @param {external:WebSocket} [ws] An existent WebSocket connection
   */
  constructor(ws) {
    super(ws);
    this._id = ws && ws.req && ws.req.headers ?
      ws.req.headers['sec-websocket-key'] : null;
  }

  /**
   * Return the current client's ID
   * @return {String} The id of this client
   */
  get id() {
    return this._id;
  }

  /**
   * {@link module:mcs-js#event:join Join} response for MCS room
   * @param  {String} userId The id of the user
   */
  joined(userId, params) {
    if (!userId || typeof (userId) !== 'string') {
      throw (new Error('invalid userId'));
    }

    var joinedMessage = new JoinedMessage(userId, params);
    if (joinedMessage) {
      this.send(joinedMessage);
    }
  }

  /**
   * {@link module:mcs-js#event:leave Leave} response for MCS room
   */
  left(params) {
    var leftMessage = new LeftMessage(params);
    if (leftMessage) {
      this.send(leftMessage);
    }
  }

  /**
   * {@link module:mcs-js#event:publishAndSubscribe PublishAndSubscribe}
   *  response for MCS room
   * @param  {String} mediaId The media's unique id in media server's context
   * @param  {String} sdp The Session Descriptor for this media session
   */
  publishedAndSubscribed(mediaId, sdp) {
    if (!mediaId || typeof (mediaId) !== 'string') {
      throw new Error('Error : Invalid Media ID');
    }

    if (!sdp || typeof (sdp) !== 'string') {
      throw new Error('Error : Invalid SDP');
    }

    var pubedAndSubedMessage = new PublishedAndSubscribed(mediaId, sdp);
    if (pubedAndSubedMessage) {
      this.send(pubedAndSubedMessage);
    }
  }

  /**
   * {@link module:mcs-js#event:unpublishedAndUnsubscribed
   *  UnpublishAndUnsubscribe} response for MCS room
   */
  unpublishedAndUnsubscribed() {
    var unpubedAndUnsubedMessage = new UnpublishedAndUnsubscribed();
    if (unpubedAndUnsubedMessage) {
      this.send(unpubedAndUnsubedMessage);
    }
  }

  /**
   * {@link module:mcs-js#event:getUsers GetUsers} response for MCS room
   *  @param  {Array<Object>} usersList The user objects of the room in the MCS
   */
  usersList(usersList) {
    if (!usersList || typeof usersList !== 'object') {
      throw new Error('Error: Invalid users list object');
    }

    let usersListMessage = new UsersList(usersList);
    if (usersListMessage) {
      this.send(usersListMessage);
    }
  }

   /**
   * {@link module:mcs-js#event:getUserMedias GetUserMedias} response for MCS room
   *  @param  {Array<Object>} userMedias The media objects of the user in the MCS
   */
  userMedias(userMedias) {
    if (!userMedias || typeof userMedias !== 'object') {
      throw new Error('Error: Invalid user medias object');
    }

    let userMediasMessage = new UserMedias(userMedias);
    if (userMediasMessage) {
      this.send(userMediasMessage);
    }
  }

  /**
   * @param  {Object} user The user object that joined the mcs
   */
  userJoined(user) {
    if (!user || typeof user !== 'object') {
      throw new Error('Error: Invalid user joined object');
    }

    let userJoinedMessage = new UserJoined(user);
    if (userJoinedMessage) {
      this.send(userJoinedMessage);
    }
  }

  /**
   * @param  {Object} user The user object that left the mcs
   */
  userLeft(user) {
    if (!user || typeof user !== 'object') {
      throw new Error('Error: Invalid user left object');
    }

    let userLeftMessage = new UserLeft(user);
    if (userLeftMessage) {
      this.send(userLeftMessage);
    }
  }

  /**
   * {@link module:mcs-js#event:mute Mute} response for MCS room
   * @param  {String} mediaId The id of the media that has been muted
   */
  muted(mediaId) {
    if (!mediaId || typeof mediaId !== 'string') {
      throw new Error('Error: Invalid muted mediaId');
    }

    let mutedMessage = new Muted(mediaId);
    if (mutedMessage) {
      this.send(mutedMessage);
    }
  }

  /**
   * {@link module:mcs-js#event:unmute Unmute} response for MCS room
   * @param  {String} mediaId The id of the media that has been unmuted
   */
  unmuted(mediaId) {
    if (!mediaId || typeof mediaId !== 'string') {
      throw new Error('Error: Invalid unmuted mediaId');
    }

    let unmutedMessage = new Unmuted(mediaId);
    if (unmutedMessage) {
      this.send(unmutedMessage);
    }
  }

  /**
   * @param  {String} mediaId The id of the media connected
   * @param  {String} userId The id of the user that has the media
   * @param  {String} name name of the media
   * @param  {Boolean} muted mute state of the media (true/false)
   * @param  {String} flowType type of flow in the media (AUDIO/VIDEO)
   * @param  {String} flowDirection direction of the flow in the media (SENDONLY/RECVONLY/SENDRECV)
   */
  mediaConnected(mediaId, userId, name, muted, flowType, flowDirection) {
    if (!mediaId || typeof (mediaId) !== 'string') {
      throw new Error('Error : Invalid Media ID');
    }

    if (!userId || typeof (userId) !== 'string') {
      throw new Error('Error : Invalid User ID');
    }

    if (!name || typeof (name) !== 'string') {
      throw new Error('Error : Invalid name');
    }

    if (typeof muted !== 'boolean') {
      throw new Error('Error : Invalid mute value');
    }

    let mediaConnectedMessage = new MediaConnected(mediaId, userId, name, muted, flowType, flowDirection);
    if (mediaConnectedMessage) {
      this.send(mediaConnectedMessage);
    }
  }

  /**
  @param  {String} mediaId The id of the media that disconnected
   */
  mediaDisconnected(mediaId) {
    if (!mediaId || typeof (mediaId) !== 'string') {
      throw new Error('Error : Invalid Media ID');
    }

    let mediaDisconnectedMessage = new MediaDisconnected(mediaId);
    if (mediaDisconnectedMessage) {
      this.send(mediaDisconnectedMessage);
    }
  }

   /**
   * {@link module:mcs-js#event:setVolume SetVolume} response for MCS room
   * @param  {String} mediaId The id of the related media
   * @param  {Number} volume New volume of the media
   */
  volumeChanged(mediaId, volume) {
    if (!mediaId || typeof (mediaId) !== 'string') {
      throw new Error('Error : Invalid Media ID');
    }
    if (volume === null || typeof (volume) !== 'number') {
      throw new Error('Error : Invalid volume');
    }

    let volumeChangedMessage = new VolumeChanged(mediaId, volume);
    if (volumeChangedMessage) {
      this.send(volumeChangedMessage);
    }
  }

  /**
   * {@link module:mcs-js#event:connect Connect} response for MCS room
   *  @param  {String} sourceId Id of the media source connection
   *  @param  {Array<String>} sinkIds Id of one or more media sinks of the connection
   */
  connected(sourceId, sinkIds) {
    if (!sourceId || typeof (sourceId) !== 'string') {
      throw new Error('Error : Invalid Source Media ID');
    }
    if (sinkIds === null || typeof (sinkIds) !== 'object') {
      throw new Error('Error : Invalid Sink Media IDs');
    }
    sinkIds.forEach(sinkId => {
      if (sinkId === null || typeof (sinkId) !== 'string') {
        throw new Error('Error : Invalid Sink Media ID');
      }
    });

    let connectedMessage = new Connected(sourceId, sinkIds);
    if (connectedMessage) {
      this.send(connectedMessage);
    }
  }

    /**
   * {@link module:mcs-js#event:disconnect Disconnect} response for MCS room
   *  @param  {String} sourceId Id of the media source connection
   *  @param  {Array<String>} sinkIds Id of one or more media sinks of the connection
   */
  disconnected(sourceId, sinkIds) {
    if (!sourceId || typeof (sourceId) !== 'string') {
      throw new Error('Error : Invalid Source Media ID');
    }
    if (sinkIds === null || typeof (sinkIds) !== 'object') {
      throw new Error('Error : Invalid Sink Media IDs');
    }
    sinkIds.forEach(sinkId => {
      if (sinkId === null || typeof (sinkId) !== 'string') {
        throw new Error('Error : Invalid Sink Media ID');
      }
    });

    let disconnectedMessage = new Disconnected(sourceId, sinkIds);
    if (disconnectedMessage) {
      this.send(disconnectedMessage);
    }
  }

  // TODO docs
  published(mediaId, sdp, params) {
    if (!mediaId || typeof (mediaId) !== 'string') {
      throw new Error('Error : Invalid Media ID');
    }

    if (!sdp || typeof (sdp) !== 'string') {
      throw new Error('Error : Invalid SDP');
    }

    const message = new Published(mediaId, sdp, params);
    if (message) {
      this.send(message);
    }
  }

}

/**
 * @ignore
 */
MCSResponseClient.prototype.send; // jshint ignore:line

/**
 * @ignore
 */
MCSResponseClient.prototype.createConnection; // jshint ignore:line

module.exports = MCSResponseClient;

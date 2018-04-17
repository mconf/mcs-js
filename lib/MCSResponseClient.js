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
  joined(userId) {
    if (!userId || typeof (userId) !== 'string') {
      throw (new Error('invalid userId'));
    }

    var joinedMessage = new JoinedMessage(userId);
    if (joinedMessage) {
      this.send(joinedMessage);
    }
  }

  /**
   * {@link module:mcs-js#event:left Leave} response for MCS room
   */
  left() {
    var leftMessage = new LeftMessage();
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

  usersList(usersList) {
    if (!usersList || typeof usersList !== 'object') {
      throw new Error('Error: Invalid users list object');
    }

    let usersListMessage = new UsersList(usersList);
    if (usersListMessage) {
      this.send(usersListMessage);
    }
  }

  userMedias(userMedias) {
    if (!userMedias || typeof userMedias !== 'object') {
      throw new Error('Error: Invalid user medias object');
    }

    let userMediasMessage = new UserMedias(userMedias);
    if (userMediasMessage) {
      this.send(userMediasMessage);
    }
  }

  userJoined(user) {
    if (!user || typeof user !== 'object') {
      throw new Error('Error: Invalid user joined object');
    }

    let userJoinedMessage = new UserJoined(user);
    if (userJoinedMessage) {
      this.send(userJoinedMessage);
    }
  }


  userLeft(user) {
    if (!user || typeof user !== 'object') {
      throw new Error('Error: Invalid user left object');
    }

    let userLeftMessage = new UserLeft(user);
    if (userLeftMessage) {
      this.send(userLeftMessage);
    }
  }

  muted(mediaId) {
    if (!mediaId || typeof mediaId !== 'string') {
      throw new Error('Error: Invalid muted mediaId');
    }

    let mutedMessage = new Muted(mediaId);
    if (mutedMessage) {
      this.send(mutedMessage);
    }
  }

  unmuted(mediaId) {
    if (!mediaId || typeof mediaId !== 'string') {
      throw new Error('Error: Invalid unmuted mediaId');
    }

    let unmutedMessage = new Unmuted(mediaId);
    if (unmutedMessage) {
      this.send(unmutedMessage);
    }
  }

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

  mediaDisconnected(mediaId) {
    if (!mediaId || typeof (mediaId) !== 'string') {
      throw new Error('Error : Invalid Media ID');
    }

    let mediaDisconnectedMessage = new MediaDisconnected(mediaId);
    if (mediaDisconnectedMessage) {
      this.send(mediaDisconnectedMessage);
    }
  }

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

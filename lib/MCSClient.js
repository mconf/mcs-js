'use strict';

const MCSBaseClient = require('./MCSBaseClient');

const JoinMessage = require('./messages/join');
const LeaveMessage = require('./messages/leave');
const PublishAndSubscribeMessage = require('./messages/publishAndSubscribe');
const UnpublishAndUnsubscribeMessage =
  require('./messages/unpublishAndUnsubscribe');


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
   * @param  {Object}   [params]   Additional parameters
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
   * by the mediaId, according to the given SDP
   * @param  {String}   mediaId  The id of the media that it is subcribing to
   * @param  {String}   sdp      The Session Descriptor
   * @param  {Object}   [params]   Additional parameters
   */
  publishAndSubscribe (mediaId, sdp, params) {
    if (!mediaId || typeof(mediaId) !== 'string') {
      throw new Error('Error : Invalid mediaId');
    }

    if (!sdp || typeof(sdp) !== 'string') {
      throw new Error ('Error : Invalid SDP');
    }

    var pubAndSubMessage =
      new PublishAndSubscribeMessage(mediaId, sdp, params);
    if (pubAndSubMessage) {
      this.send(pubAndSubMessage);
    }

  }

  /**
   * Stop publishing and subscribing to/from the stream given by mediaId
   * @param  {String}   mediaId  The id of the media that it is unsubcribing to
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
   * @param  {String}   roomId  The id of the room
   * @param  {Object}   [params]  Additional parameters
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

'use strict'

const MCSBaseClient = require('./MCSBaseClient');

const JoinMessage = require('./messages/join');
const LeaveMessage = require('./messages/leave')

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
   * @param  {String}   room_id  The id of the room
   * @param  {String}   username The name of this user
   * @param  {Object}   params   Additional parameters
   */
  join (room_id, user_name, params) {
    if (!room_id || typeof(room_id) !== 'string') {
      throw new Error('Error : Invalid room_id');
    }

    var joinMessage = new JoinMessage(room_id, user_name, params);
    if (joinMessage) {
      this.send(joinMessage);
    }
  }

  /**
   * Publish stream to Media Control Server and subscribe to the media specified
   * by the media_id, according to the given SDP
   * @param  {String}   media_id The id of the media that it is subcribing to
   * @param  {String}   sdp      The Session Descriptor
   * @param  {Object}   params   Additional parameters
   */
  publishAndSubscribe (media_id, sdp, params) {
    if (!media_id || typeof(media_id) !== 'string') {
      throw new Error('Error : Invalid media_id');
    }

    if (!sdp || typeof(sdp) !== 'string'){
      throw new Error ('Error : Invalid SDP')
    }

  }

  /**
   * Stop publishing and subscribing to/from the stream given by media_id
   * @param  {String}   media_id The id of the media that it is unsubcribing to
   * @param  {Object}   params   Additional parameters
   *
   */
  unpublishAndUnsubscribe (media_id, params) {

  }

  /**
   * Leave a room of Media Control Server
   * @param  {String} room_id The id of the room
   * @param  {Object} params  Additional parameters
   */
  leave (room_id, params) {
    if (!room_id || typeof(room_id) !== 'string') {
      throw new Error('Invalid room_id');
    }

    var leaveMessage = new LeaveMessage(room_id, params);
    if (leaveMessage) {
      this.send(leaveMessage);
      this.closeConnection();
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

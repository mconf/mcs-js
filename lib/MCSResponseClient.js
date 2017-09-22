'use strict'

const MCSBaseClient = require('./MCSBaseClient');

const JoinedMessage = require('./messages/joined');
const LeftMessage = require('./messages/left');
const PubedAndSubed = require('./messages/publishedAndSubscribed');
const UnpubedAndUnsubed = require('./messages/unpublishedAndUnsubscribed');

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
  constructor (ws) {
    super(ws);
  }

  /**
   * {@link module:mcs-js#event:join Join} response for MCS room
   * @param  {String} user_id The id of the user
   * @param  {Object} params  Additional parameters
   */
  joined (user_id, params) {
    if (!user_id || typeof(user_id) !== 'string') {
      throw (new Error('invalid user_id'));
    }

    var joinedMessage = new JoinedMessage(user_id);
    if (joinedMessage) {
      this.send(joinedMessage);
    }
  }

  /**
   * {@link module:mcs-js#event:leave Leave} Left response from the current room.
   * @param  {String} room_id the id of the room
   * @param  {Object} params  Additional parameters
   */
  left(room_id, params){
    if (!room_id || typeof(room_id) !== 'string') {
      throw new Error('Invalid room_id');
    }

    var leftMessage = new LeftMessage(room_id);
    if (leftMessage) {
      this.send(leftMessage);
    }
  }


  /**
   * {@link module:mcs-js#event:publishAndSubscribe publishAndSubscribe} response for MCS room
   * @param  {String} room_id the id of the room
   * @param  {Object} params  Additional parameters
   */
  publishedAndSubscribed(media_id, sdp, params){
    if (!media_id || typeof(media_id) !== 'string') {
      throw new Error ('Error : Invalid media_id');
    }

    if (!sdp || typeof(sdp) !== 'string'){
      throw new Error ('Error : Invalid SDP')
    }


    var pubedAndSubedMessage = new PubedAndSubed(media_id, sdp);
    if (pubedAndSubedMessage){
      this.send(pubedAndSubedMessage);
    }
  }


  /**
   * {@link module:mcs-js#event:unpublishedAndUnsubscribed UnpublishAndUnsubscribe} response for MCS room
   * @param  {String} media_id The id of the media
   * @param  {Object} params Additional parameters
   */
  unpublishedAndUnsubscribed(media_id, params){
    if(!media_id || typeof(media_id) !== 'string'){
      throw (new Error('invalid media_id'));
    }

    var unpubedAndUnsubedMessage = new UnpubedAndUnsubed (media_id);
    if(unpubedAndUnsubedMessage){
      this.send(unpubedAndUnsubedMessage);
    }

  }
}

/**
 * @ignore
 */
MCSResponseClient.prototype.send;

/**
 * @ignore
 */
MCSResponseClient.prototype.createConnection;

module.exports = MCSResponseClient;

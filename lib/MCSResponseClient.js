'use strict'

const MCSBaseClient = require('./MCSBaseClient');

const JoinedMessage = require('./messages/joined');

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

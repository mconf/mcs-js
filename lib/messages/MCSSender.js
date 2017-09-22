'use strict'

const util = require('util');
const parser = require('./MCSParser');

/**
 * Sender for MCS API messages
 * @memberof module:mcs-js
 */
class MCSSender {

  constructor (sender) {
    this._sender = sender;
  }

  /**
   * Send message to MCS server
   * @param  {module:mcs-js.MCSMessage} message The current message
   */
  sendMessage(message, callback) {
    var sMessage = parser.stringify(message);
    if ( util.isString(sMessage) && sMessage.length ) {
      this._sender.send(sMessage, callback);
    }
  }
}

module.exports = MCSSender;

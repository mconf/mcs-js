'use strict';

const EventEmitter = require('events');
const parser = require('./MCSParser');

/**
 * Receiver for MCS API messages
 * @memberof module:mcs-js
 */
class MCSReceiver extends EventEmitter {

  constructor (ws) {
    super();
    if (ws && typeof(ws) === 'object') {
      ws.addEventListener('message',this.handleMessage.bind(this));
      this._ws = ws;
    }
  }

  /**
   * Handle incoming messages for MCS API
   * @param  {String} message Received message
   */
  handleMessage(message) {
    var _self = this;
    var pMessage = parser.parse(message);
    if ( pMessage && typeof(pMessage) === 'object' &&
      typeof(pMessage.name) === 'string' &&
      typeof(pMessage.body) === 'object') {
      _self.emit('api', pMessage.name, pMessage.body);
    }
  }
}

module.exports = MCSReceiver;

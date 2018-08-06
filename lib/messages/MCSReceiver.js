'use strict';

const EventEmitter = require('events');
const parser = require('./MCSParser');
const MCSTransactionManager = require('../MCSTransactionManager');

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
    const _self = this;
    const pMessage = parser.parse(message);
    if ( pMessage && typeof(pMessage) === 'object' &&
      typeof(pMessage.name) === 'string' &&
      typeof(pMessage.body) === 'object') {

      console.log(pMessage);
      const { transactionId }  = pMessage;
      MCSTransactionManager.resolveTransaction(transactionId, pMessage.body);


      _self.emit('api', pMessage.name, { transactionId, ...pMessage.body });
    }
  }
}

module.exports = MCSReceiver;

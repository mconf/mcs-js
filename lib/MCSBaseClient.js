'use strict';

if (typeof WebSocket === 'undefined') {
  var ws = require('ws');
} else {
  var ws = WebSocket;
}

const MCSReceiver = require('./messages/MCSReceiver');
const MCSSender = require('./messages/MCSSender');
const MCSBase = require('./MCSBase');

/**
 * This class handles basic functionality for the MCS client
 * @extends {module:mcs-js.MCSBase} MCSBase
 * @memberof module:mcs-js
 * @fires {@link module:mcs-js#event:open open}
 */
class MCSBaseClient extends MCSBase {
/**
 * Create a basic MCS client
 * @param {external:WebSocket} [ws] An existent WebSocket connection
 */
  constructor (ws) {
    super();
    this._setupConnection(ws);
    this.eventCallbacks = {};
  }

  /**
   * Send message over the existing connection
   * @param  {module:mcs-js.MCSMessage} message The current message
   */
  send(message) {
    this._sender.sendMessage(message);
  }

  /**
   * Creates a new WebSocket connection
   * @param  {String} uri The WebSocket URI of the Media Control Server
   */
  createConnection(uri) {
    var websocket = new ws(uri);
    this._setupConnection(websocket);
  }

  /**
   * Close current WebSocket connection
   */
  closeConnection() {
    var _self = this;
    if (_self._ws) {
      _self._ws.close();
    }
  }

  _setupConnection(ws) {
    var _self = this;
    try {
      if (ws && typeof(ws) === 'object') {
        if (ws.readyState === ws.OPEN) {
          _self._initReceivers(ws);
        } else {
          ws.addEventListener('open', function () {
            _self._initReceivers(ws);
          });

          ws.addEventListener('close', () => {
            _self.emit('close');
          });

          ws.addEventListener('error', (error) => {
            _self.emit('error', error);
          });
        }
        _self._ws = ws;
      }
    } catch (error) {
      _self.emit('error', error);
    }
  }

  _initReceivers (client) {
    var _self = this;
    _self._initReceiver(client);
    _self._initSender(client);
    _self.emit('open');
  }

  _initReceiver(client) {
    const receiver = new MCSReceiver(client);

    receiver.on('api', (name, args) => {
      this.emit(name, args);
      this._triggerCallback(name, args);
    });
  }

  _initSender(client) {
    this._sender = new MCSSender(client);
  }

  _addEventCallback(eventName, identifier, callback) {
    if (this.eventCallbacks[eventName] == null) {
      this.eventCallbacks[eventName] = [];
    }

    this.eventCallbacks[eventName].push({ identifier, callback });
  }

  _triggerCallback(eventName, args) {
    const eventRegistry = this.eventCallbacks[eventName];
    if (eventRegistry) {
      const identifier = this._getValidIdentifier(eventName, args);
      eventRegistry
        .filter(e => e.identifier === identifier)
        .forEach(e => {
          e.callback(args)
        });
    }
  }

  _getValidIdentifier(eventName, payload) {
    const { roomId, userId, mediaId } = payload;
    let identifier;
    switch (eventName) {
      case 'roomCreated':
        identifier = 'all';
        break;
      case 'userJoined':
      case 'userLeft':
      case 'mediaConnected':
        identifier = roomId;
        break;
      case 'mediaDisconnected':
      case 'mediaState':
      case 'onIceCandidate':
        identifier = mediaId;

    }

    return identifier;
  }
}

module.exports = MCSBaseClient;

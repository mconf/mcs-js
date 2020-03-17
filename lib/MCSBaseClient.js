'use strict';

if (typeof WebSocket === 'undefined') {
  var ws = require('ws');
} else {
  var ws = WebSocket;
}

const MCSReceiver = require('./messages/MCSReceiver');
const MCSSender = require('./messages/MCSSender');
const MCSBase = require('./MCSBase');
const C = require('./constants');

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
      this.emit('api', name, args);
      this._triggerCallback(name, args);
      this._unregisterEvents(name, args);
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

  _unregisterEvents (eventName, args) {
    const eventsToUnregister = C.EVENT_UNREGISTER_MAP[eventName];
    if (eventsToUnregister) {
      eventsToUnregister.forEach(etuName => {
        let registry = this.eventCallbacks[etuName];
        if (registry) {
          let etuIdentifier = this._getValidIdentifier(etuName, args);
          this.eventCallbacks[etuName] = registry.filter(e => e.identifier !== etuIdentifier);
        }
      });
    }
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
    const { roomId, userId, mediaSessionId, mediaId } = payload;
    let identifier;
    switch (eventName) {
      case C.ROOM_CREATED:
        identifier = 'all';
        break;
      case C.USER_JOINED:
      case C.USER_LEFT:
      case C.MEDIA_CONNECTED:
      case C.CONFERENCE_FLOOR_CHANGED:
      case C.CONTENT_FLOOR_CHANGED:
      case C.ROOM_DESTROYED:
        identifier = roomId;
        break;
      case C.MEDIA_DISCONNECTED:
      case C.MEDIA_RENEGOTIATED:
      case C.MEDIA_STATE:
      case C.MUTED:
      case C.UNMUTED:
      case C.VOLUME_CHANGED:
      case C.START_TALKING:
      case C.STOP_TALKING:
      case C.ON_ICE_CANDIDATE:
      case C.DTMF_RECEIVED:
      case C.SUBSCRIBED_TO:
      case C.KEYFRAME_NEEDED:
        identifier = mediaId;
        break;
      case C.BITRATE_CHANGE:
        identifier = mediaSessionId;
        break;
    }

    return identifier;
  }
}

module.exports = MCSBaseClient;

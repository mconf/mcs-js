'use strict';

const WebSocket = require('ws');
const MCSBase = require('./MCSBase');
const MCSResponseClient = require('./MCSResponseClient');

/**
 * This class handles basic functionality for the MCS server
 * @extends module:mcs-js.MCSBase
 * @memberof module:mcs-js
 * @fires {@link module:mcs-js#event:connection connection}
 */
class MCSBaseServer extends MCSBase {

  /**
   * Create a basic instance of MCS specified by the given options
   * @param  {external:WebSocketServerOptions} options Server options
   */
  constructor (options) {
    super();
    var _self = this;
    var ws = new WebSocket.Server(options);
    var connectionTimeout = options.connectionTimeout ? options.connectionTimeout : 30000;

    ws.on('connection', (wsclient, req) => {
      wsclient.req = req; // ws 3.0+
      var mcsClient = new MCSResponseClient(wsclient);
      mcsClient._ws.on('close', function () {
        mcsClient.emit('close');
      });

      // used to detect connection loss
      mcsClient._ws.isAlive = true;
      mcsClient._ws.on('pong', function () {
        mcsClient._ws.isAlive = true;
      });

      _self.emit('connection', mcsClient);
    });

    ws.on('close', () => {
      _self.emit('close');
    });
  
    //check connection status
    const interval = setInterval(function ping() {
      for (let client of ws.clients) {
        if (client.isAlive === false) {
          return client.terminate();
        }    
        client.isAlive = false;
        client.ping(this.noop);
      };
    }, connectionTimeout);
    _self._ws = ws;
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

  noop() {}
}

module.exports = MCSBaseServer;

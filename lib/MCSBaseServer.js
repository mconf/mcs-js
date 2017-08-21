'use strict'

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
    ws.on('connection', function (wsclient) {
      var mcs_client = new MCSResponseClient(wsclient);
      _self.emit('connection', mcs_client);
    });
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
}

module.exports = MCSBaseServer;

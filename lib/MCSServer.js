'use strict';

const MCSBaseServer = require('./MCSBaseServer');

/**
 * This class represents a server instance for Media Control Server API
 * @extends module:mcs-js.MCSBaseServer
 * @memberof module:mcs-js
 * @fires {@link module:mcs-js#event:connection connection}
 */
class MCSServer extends MCSBaseServer {
  /**
   * Create a server instance of MCS specified by the given options
   * @param  {external:WebSocketServerOptions} options Server options
   */
  constructor (options) {
    super(options);
  }
}

module.exports = MCSServer;

'use strict';
/**
 * Base message for the MCS API
 * @memberof module:mcs-js
 */
class MCSMessage {
  /**
   * Creates a MCSMessage
   * @param  {String} [name] The name of the message
   * @param  {Object} [body] The body of the message
   */
  constructor (name,body) {
    this._name = name || this.constructor.name.charAt(0).toLowerCase() +
      this.constructor.name.slice(1);
    this.version = "0.0.1-dev";
    this.timestamp = 0;
    this.body = body || {};
  }

  set name (value) {
    this._name = value;
  }

  get name () {
    return this._name;
  }
}

module.exports = MCSMessage;

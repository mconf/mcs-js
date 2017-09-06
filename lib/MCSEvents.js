/**
 * Events for Media Control Server
 * @memberof module:mcs-js
 */

/**
 * @event module:mcs-js#MCSEvent
 * @type {Object}
 */

 /**
  * @event module:mcs-js#open
  * @type {module:mcs-js#event:MCSEvent}
  */

 /**
  * @event module:mcs-js#connection
  * @type {module:mcs-js.MCSResponseClient}
  */


 /**
  * @event module:mcs-js#join
  * @property {String} room_id The id of the room
  * @property {String} user_name The name of the user
  * @property {Object} params Additional parameters
  * @type {module:mcs-js#event:MCSEvent}
  */

/**
 * @event module:mcs-js#joined
 * @property {String} user_id The id of the user
 * @property {Object} params Additional parameters
 * @type {module:mcs-js#event:MCSEvent}
 */

 /**
  * @event module:mcs-js#leave
  * @property {String} user_id The id of the user
  * @property {Object} params Additional parameters
  * @type {module:mcs-js#event:MCSEvent}
  */

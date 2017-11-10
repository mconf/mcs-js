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
 * @property {String} room_type The type of the room
 * @property {module:mcs-js#MCSParams} params Additional parameters
 * @type {module:mcs-js#event:MCSEvent}
*/


/**
 * @event module:mcs-js#joined
 * @property {String} user_id The id of the user
 * @property {Object} params Additional parameters
 * @type {module:mcs-js#event:MCSEvent}
 */


/**
 * @event module:mcs-js#publishAndSubscribe
 * @property {String} source_id The id of the source to subscribe
 * @property {String} media_id The id of the media to subscribe
 * @property {String} type The type of media/stream that user is going to use
 *   to comunicate with the server (WEBRTC or RTP)
 * @property {module:mcs-js#PublishAndSubscribeParams} params
 *   Additional parameters
 * @type {module:mcs-js#event:MCSEvent}
 */


/**
 * @event module:mcs-js#publishedAndSubscribed
 * @property {String} mediaId The id of the user's media used for the media
 *   communication with the server
 * @property {String} [sdp] The Server's Session Descriptor (SDP)
 * @type {module:mcs-js#event:MCSEvent}
 */


/**
 * @event module:mcs-js#unpublishAndUnsubscribe
 * @property {String} media_id The id of the media to unsubscribe
 * @property {module:mcs-js#MCSParams} params Additional parameters
 * @type {module:mcs-js#event:MCSEvent}
 */


/**
 * @event module:mcs-js#unpublishedAndUnsubscribed
 * @type {module:mcs-js#event:MCSEvent}
 */


/**
 * @event module:mcs-js#leave
 * @property {String} room_id The id of the room
 * @property {module:mcs-js#MCSParams} params Additional parameters
 * @type {module:mcs-js#event:MCSEvent}
*/


/**
 * @event module:mcs-js#left
 * @type {module:mcs-js#event:MCSEvent}
 */

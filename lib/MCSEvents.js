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
 * @property {String} media_id The id of the user's media used for the media
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

/**
 * @event module:mcs-js#userLeft
 * @param  {Object} user The user object that left the mcs
 * @type {module:mcs-js#event:MCSEvent}
 */

/**
 * @event module:mcs-js#userJoined
 * @property  {Object} user The user object that joined the mcs
 * @type {module:mcs-js#event:MCSEvent}
 */

/**
 * @event module:mcs-js#getUsers
 * @property {String} room_id The id of the room
 * @type {module:mcs-js#event:MCSEvent}
 */

 /**
 * @event module:mcs-js#usersList
 * @property {Array<Object>} usersList users object in the room
 * @type {module:mcs-js#event:MCSEvent}
 */

  /**
 * @event module:mcs-js#getUserMedias
 * @property {String} user_id The id of the user
 * @type {module:mcs-js#event:MCSEvent}
 */

/**
 * @event module:mcs-js#userMedias
 * @property {Array<Object>} userMedias medias object of the user
 * @type {module:mcs-js#event:MCSEvent}
 */

/**
 * @event module:mcs-js#mute
 * @property {String} media_id The id of the media to be muted
 * @type {module:mcs-js#event:MCSEvent}
 */


/**
 * @event module:mcs-js#muted
 * @property {String} media_id The id of the media that has benn muted
 * @type {module:mcs-js#event:MCSEvent}
 */

/**
 * @event module:mcs-js#setVolume
 * @property {String} mediaId The id of the media to change volume
 * @property {Number} volume New volume of the media
 * @type {module:mcs-js#event:MCSEvent}
 */


/**
 * @event module:mcs-js#volumeChanged
 * @property {String} mediaId The id of the media that changed volume
 * @property {Number} volume New volume of the media
 * @type {module:mcs-js#event:MCSEvent}
 */

/**
 * @event module:mcs-js#mediaConnected
 * @property  {String} mediaId The id of the media connected
 * @property  {String} userId The id of the user that has the media
 * @property  {String} name name of the media
 * @property  {Boolean} muted mute state of the media (true/false)
 * @property  {String} flowType type of flow in the media (AUDIO/VIDEO)
 * @property  {String} flowDirection direction of the flow in the media (SENDONLY/RECVONLY/SENDRECV)
 * @type {module:mcs-js#event:MCSEvent}
 */

/**
 * @event module:mcs-js#mediaDisconnected
 * @property {String} mediaId The id of the disconnected media
 * @type {module:mcs-js#event:MCSEvent}
 */

/**
 * @event module:mcs-js#connect
 * @property {String}   sourceMediaId The id of the source media
 * @property {Array<String>}  mediaSinkIds destination media ids
 * @type {module:mcs-js#event:MCSEvent}
 */

 /**
 * @event module:mcs-js#connected
 * @param  {String} sourceId Id of the media source connection
 * @param  {Array<String>} sinkIds Id of one or more media sinks of the connection
 * @type {module:mcs-js#event:MCSEvent}
 */

 /**
 * @event module:mcs-js#disconnect
 * @property {String}   sourceMediaId The id of the source media
 * @property {Array<String>}  mediaSinkIds destination media ids
 * @type {module:mcs-js#event:MCSEvent}
 */

 /**
 * @event module:mcs-js#disconnected
 * @param  {String} sourceId Id of the media source connection
 * @param  {Array<String>} sinkIds Id of one or more media sinks of the connection
 * @type {module:mcs-js#event:MCSEvent}
 */

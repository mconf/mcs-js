'use strict';

const MCSMessage = require('./MCSMessage');

class usersList extends MCSMessage {
  constructor(users) {
    super();
    this.body.users = users;
  }
}

module.exports = usersList;

'use strict';

const MCSMessage = require('./MCSMessage');

class UsersList extends MCSMessage {
  constructor(users) {
    super();
    this.body.users = users;
  }
}

module.exports = UsersList;

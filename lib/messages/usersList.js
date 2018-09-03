'use strict';

const MCSMessage = require('./MCSMessage');

class UsersList extends MCSMessage {
  constructor(users, params) {
    super(null, null, params);
    this.body.users = users;
  }
}

module.exports = UsersList;

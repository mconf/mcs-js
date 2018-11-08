'use strict';

const MCSMessage = require('./MCSMessage');
const C = require('../constants');

class UsersList extends MCSMessage {
  constructor(users, params) {
    super(C.USERS_LIST, null, params);
    this.body.users = users;
  }
}

module.exports = UsersList;

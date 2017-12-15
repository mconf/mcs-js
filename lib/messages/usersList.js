'use strict';

const mcsmessage = require('./mcsmessage');

class usersList extends mcsmessage {
  constructor(users) {
    super();
    this.body.users = users;
  }
}

module.exports = usersList;

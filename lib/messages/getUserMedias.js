'use strict';

const mcsmessage = require('./mcsmessage');

class getUserMedias extends mcsmessage {
  constructor(user) {
    super();
    this.body.user = user ;
  }
}

module.exports = getUserMedias;

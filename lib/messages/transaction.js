'use strict';

const uuidv4 = require('uuid/v4');

/**
 * Base transaction for the MCS API
 * @memberof module:mcs-js
 */
class Transaction {
  /**
   * Creates a Transaction object
   */
  constructor (transactionId) {
    if (transactionId) {
      this.transactionId = transactionId;
      return;
    } else {
      this.transactionId = uuidv4();
      // A bit of a defer antipattern, I'll leave it to the highlanders
      // to improve - prlanzarin 04/08/18
      this.response = null;
      this.promise = new Promise((resolve, reject) => {
        let isResolved = false;
        this.resolveResponse = response => {
          if (!isResolved) {
            isResolved = true;
            return resolve(response);
          }
        };
        this.rejectResponse = response => {
          if (!isResolved) {
            isResolved = true;
            return reject(response);
          }
        }
      });
    }
  }

  resolve (response) {
    return this.resolveResponse(response);
  }

  reject (response) {
    return this.rejectResponse(response);
  }

}

module.exports = Transaction;

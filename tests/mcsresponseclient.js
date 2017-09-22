var MCSResponseClient = require('../lib/MCSResponseClient');

exports.joinedEmptyUserId = function (test) {
  var client = new MCSResponseClient();
  test.throws(function () {
    client.joined('');
  }, Error);
  test.done();
}

exports.joinedNullUserId = function (test) {
  var client = new MCSResponseClient();
  test.throws(function () {
    client.joined(null);
  }, Error);
  test.done();
}

exports.publishedAndSubscribedNullParams = function (test) {
  var client = new MCSResponseClient();
  test.throws(function () {
    client.publishedAndSubscribed(null);
  }, Error);
  test.done();
}

exports.unpublishedAndUnsubscribedNullParams = function (test) {
  var client = new MCSResponseClient();
  test.throws(function () {
    client.unpublishedAndUnsubscribed(null);
  }, Error);
  test.done();
}

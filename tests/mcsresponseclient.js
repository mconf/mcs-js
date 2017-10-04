var MCSResponseClient = require('../lib/MCSResponseClient');
var mcs = require('../index');

var _port = 8082;
const _host = 'localhost';
const _timeout = 2000;

exports.joinedEmptyUserId = function (test) {
  var server = new mcs.Server({port: _port});
  var client = new mcs('ws://' + _host + ':' + _port++);

  setTimeout(function () {
    test.ok(false,'Server timeout');
    client.closeConnection();
    server.closeConnection();
    test.done();
  }, _timeout);

  server.on('connection', function (rclient) {
    rclient.on('join', () => {
      test.throws(function () {
        rclient.joined('');
      }, Error);
      test.done();
      server.closeConnection();
      client.closeConnection();
    });
  });

  client.on('open', function () {
    client.join('1','Joao',{});
    client.on('joined', () => {
      test.ok(true, 'Joined is working');
      test.done();
      server.closeConnection();
      client.closeConnection();
  });
});
}

exports.joinedNullUserId = function (test) {
  var client = new MCSResponseClient();
  test.throws(function () {
    client.joined(null);
  }, Error);
  test.done();
}

exports.publishedAndSubscribedEmptySdp = function (test) {
  var client = new MCSResponseClient();
  test.throws(function () {
    client.publishedAndSubscribed('');
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

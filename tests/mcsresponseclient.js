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
        rclient.joined(null);
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

exports.publishedAndSubscribedEmptySdp = function (test) {
  var server = new mcs.Server({port: _port});
  var client = new mcs('ws://' + _host + ':' + _port++);

  setTimeout(function () {
    test.ok(false,'Server timeout');
    client.closeConnection();
    server.closeConnection();
    test.done();
  }, _timeout);

  server.on('connection', function (rclient) {
    rclient.on('publishAndSubscribe', () => {
      test.throws(function () {
        rclient.publishedAndSubscribed('');
      }, Error);
      test.done();
      server.closeConnection();
      client.closeConnection();
    });
  });

  client.on('open', function () {
    client.publishAndSubscribe('23a','sdp');
    client.on('publishedAndSubscribed', () => {
      test.ok(true, 'publishAndSubscribe is working');
      test.done();
      server.closeConnection();
      client.closeConnection();
  });
});
}

exports.publishedAndSubscribedNullParams = function (test) {
  var server = new mcs.Server({port: _port});
  var client = new mcs('ws://' + _host + ':' + _port++);

  setTimeout(function () {
    test.ok(false,'Server timeout');
    client.closeConnection();
    server.closeConnection();
    test.done();
  }, _timeout);

  server.on('connection', function (rclient) {
    rclient.on('publishAndSubscribe', () => {
      test.throws(function () {
        rclient.publishedAndSubscribed(null);
      }, Error);
      test.done();
      server.closeConnection();
      client.closeConnection();
    });
  });

  client.on('open', function () {
    client.publishAndSubscribe('23a','sdp');
    client.on('publishedAndSubscribed', () => {
      test.ok(true, 'publishedAndSubscribed is working');
      test.done();
      server.closeConnection();
      client.closeConnection();
    });
  });
}

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
      }, "Empty user id", "Set a valid user id");
      test.done();
      server.closeConnection();
      client.closeConnection();
    });
  });

  client.on('open', function () {
    client.join('1','Joao',{});
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
      }, "Null user id", "Set a valid user id");
      test.done();
      server.closeConnection();
      client.closeConnection();
    });
  });

  client.on('open', function () {
    client.join('1','Joao',{});
  });
}

exports.publishedAndSubscribedEmptyMediaId = function (test) {
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
        rclient.publishedAndSubscribed('','SDP_2');
      }, "Empty Media Id", "Set Valid SDP");
      client.closeConnection();
      server.closeConnection();
      test.done();
    });
  });

  client.on('open', function () {
    client.publishAndSubscribe('USER_X', 'MEDIA_1', 'RTP',{descriptor: 'SDP_1'});
  });
}

exports.publishedAndSubscribedEmptySdp = (test) => {
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
        rclient.publishedAndSubscribed('UnIqUe_Id','');
      }, "Empty SDP", "Set Valid SDP");
      server.closeConnection();
      client.closeConnection();
      test.done();
    });
  });

  client.on('open', function () {
    client.publishAndSubscribe('USER_X', 'MEDIA_1', 'RTP',{descriptor: 'SDP_1'});
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
      }, "Missing Params", "Set valid params");
      server.closeConnection();
      client.closeConnection();
      test.done();
    });
  });

  client.on('open', function () {
    client.publishAndSubscribe('USER_X', 'MEDIA_1', 'RTP',{descriptor: 'SDP_1'});
  });
}
var mcs = require('../index');

var _port = 8082;
const _host = 'localhost';
const _timeout = 2000;

exports.join = function (test) {
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
      test.ok(true, 'Join is working');
      test.done();
      server.closeConnection();
      client.closeConnection();
    });
  });

  client.on('open', function () {
    client.join('1','Joao','MCU');
  });
}

exports.joinJoined = (test) => {
  var server = new mcs.Server({port: _port});
  var client = new mcs('ws://' + _host + ':' + _port++);

  setTimeout(() => {
    test.ok(false,'Server timeout');
    client.closeConnection();
    server.closeConnection();
    test.done();
  }, _timeout);

  server.on('connection', (rclient) => {
    rclient.on('join', () => {
      rclient.joined('abcd1234');
    });
  });

  client.on('open', () => {
    client.join('1','Joao', {});

    client.on('joined', () => {
      test.ok(true, 'Joined is working');
      test.done();
      server.closeConnection();
      client.closeConnection();
    });
  });
}

exports.leave = (test) => {
  var server = new mcs.Server({port: _port});
  var client = new mcs('ws://' + _host + ':' + _port++);

  setTimeout(() => {
    test.ok(false,'Server timeout');
    client.closeConnection();
    server.closeConnection();
    test.done();
  }, _timeout);

  server.on('connection', (rclient) => {
    rclient.on('leave', () => {
      test.ok(true,'leave is working');
      client.closeConnection();
      server.closeConnection();
      test.done();
    })
  });

  client.on('open', () => {
    client.leave('1');
  });
}

exports.leaveLeft = (test) => {
  var server = new mcs.Server({port: _port});
  var client = new mcs('ws://' + _host + ':' + _port++);

  setTimeout(() => {
    test.ok(false,'Server timeout');
    client.closeConnection();
    server.closeConnection();
    test.done();
  }, _timeout);

  server.on('connection', (rclient) => {
    rclient.on('join', () => {
      rclient.joined('abcd1234');
    })
  });

  client.on('open', () => {
    client.join('1','Joao', {});
    client.on('joined', () => {
      test.ok(true,'joined is working');
      client.closeConnection();
      server.closeConnection();
      test.done();
    })
  });
}

exports.publishAndSubscribe = (test) => {
  var server = new mcs.Server({port: _port});
  var client = new mcs('ws://' + _host + ':' + _port++);

  setTimeout(() => {
    test.ok(false,'Server timeout');
    client.closeConnection();
    server.closeConnection();
    test.done();
  }, _timeout);

  server.on('connection', (rclient) => {
    rclient.on('publishAndSubscribe', () => {
      test.ok(true,'publishAndSubscribe is working');
      client.closeConnection();
      server.closeConnection();
      test.done();
    })
  });

  client.on('open', () => {
    client.publishAndSubscribe('USER_X', 'MEDIA_1', 'RTP',{descriptor: 'SDP1'});
  });
}

exports.publishAndSubscribePublishedAndSubscribed = (test) => {
  var server = new mcs.Server({port: _port});
  var client = new mcs('ws://' + _host + ':' + _port++);

  setTimeout(() => {
    test.ok(false,'Server timeout');
    client.closeConnection();
    server.closeConnection();
    test.done();
  }, _timeout);

  server.on('connection', (rclient) => {
    rclient.on('publishAndSubscribe', (args) => {
      test.equals(args.source_id, 'USER_X', 'PubAndSub\'s room_id working');
      test.equals(args.media_id, 'MEDIA_1', 'PubAndSub\'s room_id working');
      test.equals(args.type, 'RTP', 'PubAndSub\'s room_id working');
      test.equals(
        args.params.descriptor,
        'SDP1', 'PubAndSub\'s room_id working'
      );
      rclient.publishedAndSubscribed('UnIqUe_Id', 'SDP1_ANSWER');
    })
  });

  client.on('open', () => {
    client.on('publishedAndSubscribed', (args) => {
      test.notEqual(args, null, 'PubedAndSubed\'s args working');
      test.equal(args.media_id, 'UnIqUe_Id', 'PubedAndSubed\'s media_id');
      test.equal(args.sdp, 'SDP1_ANSWER', 'PubedAndSubed\'s sdp');
      client.closeConnection();
      server.closeConnection();
      test.done();
    });
    client.publishAndSubscribe('USER_X', 'MEDIA_1', 'RTP',{descriptor: 'SDP1'});
  });
}

exports.unpublishAndUnsubscribe = (test) => {
  var server = new mcs.Server({port: _port});
  var client = new mcs('ws://' + _host + ':' + _port++);

  setTimeout(() => {
    test.ok(false,'Server timeout');
    client.closeConnection();
    server.closeConnection();
    test.done();
  }, _timeout);

  server.on('connection', (rclient) => {
    rclient.on('unpublishAndUnsubscribe', () => {
      test.ok(true,'publishAndSubscribe is working');
      client.closeConnection();
      server.closeConnection();
      test.done();
    })
  });

  client.on('open', () => {
    client.unpublishAndUnsubscribe('MEDIA_1','AUDIO_AND_VIDEO',{});
  });
}

exports.joinArgs = function (test) {
  var server = new mcs.Server({port: _port});
  var client = new mcs('ws://' + _host + ':' + _port++);

  setTimeout(function () {
    test.ok(false,'Server timeout');
    client.closeConnection();
    server.closeConnection();
    test.done();
  }, _timeout);

  server.on('connection', function (rclient) {
    rclient.on('join', function (args) {
      test.equals(args.room_id, '1', 'Join\'s room_id working');
      test.equals(args.user_name, 'Joao', 'Join\'s user_name working');
      client.closeConnection();
      server.closeConnection();
      test.done();
    });
  });

  client.on('open', function () {
    client.join('1','Joao','MCU');
  });
}


exports.publishAndSubscribeArgs = (test) => {
  var server = new mcs.Server({port: _port});
  var client = new mcs('ws://' + _host + ':' + _port++);

  setTimeout(() => {
    test.ok(false,'Server timeout');
    client.closeConnection();
    server.closeConnection();
    test.done();
  }, _timeout);

  server.on('connection', (rclient) => {
    rclient.on('publishAndSubscribe', (args) => {
      test.equals(args.source_id, 'USER_X', 'PubAndSub\'s room_id working');
      test.equals(args.media_id, 'MEDIA_1', 'PubAndSub\'s room_id working');
      test.equals(args.type, 'RTP', 'PubAndSub\'s room_id working');
      test.equals(
        args.params.descriptor,
        'SDP1', 'PubAndSub\'s room_id working'
      );
      client.closeConnection();
      server.closeConnection();
      test.done();
    })
  });

  client.on('open', () => {
    client.publishAndSubscribe('USER_X', 'MEDIA_1', 'RTP',{descriptor: 'SDP1'});
  });
}

exports.leaveArgs = (test) => {
  var server = new mcs.Server({port: _port});
  var client = new mcs('ws://' + _host + ':' + _port++);

  setTimeout(() => {
    test.ok(false,'Server timeout');
    client.closeConnection();
    server.closeConnection();
    test.done();
  }, _timeout);

  server.on('connection', (rclient) => {
    rclient.on('leave', (args) => {
      test.equals(args.room_id, '2', 'Leave\'s room_id working');
      client.closeConnection();
      server.closeConnection();
      test.done();
    })
  });

  client.on('open', () => {
    client.leave('2');
  });
}

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
    rclient.on('join', function (args){
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


exports.joinleave = function(test){
  var server = new mcs.Server({port: _port});
  var client = new mcs('ws://' + _host + ':' + _port++);

  setTimeout(function () {
    test.ok(false,'Server timeout');
    client.closeConnection();
    server.closeConnection();
    test.done();
  }, _timeout);

  server.on('connection', function (rclient) {
    rclient.on('join', function (args){
        test.ok(true, 'Join is working');
        rclient.joined('1');
    });
      rclient.on('leave', function(args){
      test.ok(true,'leave is working');
      test.done();
      server.closeConnection();
      client.closeConnection();

    })
  });


  client.on('open', function () {
    client.join('1','Joao','MCU');
    client.on('joined', function(args){
      client.leave('1');
    })
  });





}




exports.joinArgs = function (test) {
  var server = new mcs.Server({port: _port});
  var client = new mcs('ws://' + _host + ':' + _port++);

  setTimeout(function () {
    test.ok(false,'Server timeout');
    test.done();
  }, _timeout);

  server.on('connection', function (rclient) {
    rclient.on('join', function (args){
      test.equals(args.room_id, '1', 'Join\'s room_id working');
      test.equals(args.user_name, 'Joao', 'Join\'s user_name working');
      test.done();
      server.closeConnection();
      client.closeConnection();
    });
  });

  client.on('open', function () {
    client.join('1','Joao','MCU');
  });
}

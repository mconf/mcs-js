var mcs = require('mcs-js');

var server = new mcs.Server({port: 8080});

console.log('Server is running ...');

server.on('connection', function (client) {
  console.log('Client connected!');

  client.on('join', function (args) {
    console.log('User Joining! ', args);
    var user_id = "user01020x1";
    client.joined(user_id);
  });
});

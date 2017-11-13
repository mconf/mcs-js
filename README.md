# mcs-js #
mcs-js is a simple client/server library for Media Control Server (MCS) API.
This provides methods for connecting to a server and also serving MCS API

#### Client example ####

```javascript
var mcs = require('mcs-js');

var client = new mcs('ws://localhost:8080/mcs');

client.on('open', function () {
  console.log('Connected ... ');
  client.join('1','Joao', {});
});

client.on('joined', function (args) {
  console.log('Joined ! this is my user_id: ' + args.user_id);
});
```

#### Server Example ####

```javascript
var mcs = require('mcs-js');

var server = new mcs.Server({port: 8080, path: '/mcs'});

console.log('Server is running ...');

server.on('connection', function (client) {
  console.log('Client connected!');

  client.on('join', function (args) {
    console.log('User Joining! ', args);
    var user_id = "user01020x1";
    client.joined(user_id);
  });
});
```

## Authors ##


var mcs = require('mcs-js');

var client = new mcs('ws://localhost:8080/mcs');

client.on('open', function () {
  console.log('Connected ... ');
  client.join('1','Joao', {});
});

client.on('joined', function (args) {
  console.log('Joined ! this is my user_id: ' + args.user_id);
});

var MCSMessage = require('../lib/messages/MCSMessage');
var Join = require('../lib/messages/join');
var Joined = require('../lib/messages/joined');

exports.MCSMessageName = function (test) {
  var mcs = new MCSMessage();
  test.equal(mcs.name,'mcsmessage', 'Valid name');
  test.done();
}

exports.MCSMessageBody = function (test) {
  var mcs = new MCSMessage();
  test.notEqual(mcs.body,null,'Empty message body');
  test.done();
}

exports.JoinName = function (test) {
  var join = new Join();
  test.equal(join.name,'join', 'Valid name');
  test.done();
}

exports.JoinParams = function (test) {
  var join = new Join('1', 'Joao');

  test.equal(join.body.room_id , '1', 'Valid room_id');
  test.equal(join.body.user_name , 'Joao', 'Valid user_name');
  test.done();
}

exports.JoinedName = function (test) {
  var joined = new Joined();
  test.equal(joined.name,'joined', 'Valid name');
  test.done();
}

exports.JoinedParams = function (test) {
  var joined = new Joined('hkl91odce');

  test.equal(joined.body.user_id , 'hkl91odce', 'Valid user_id');
  test.done();
}

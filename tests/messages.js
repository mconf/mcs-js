var MCSMessage = require('../lib/messages/MCSMessage');
var Join = require('../lib/messages/join');
var Joined = require('../lib/messages/joined');
var Leave = require ('../lib/messages/leave');
var Left = require('../lib/messages/left');
var PublishAndSubscribe = require('../lib/messages/publishAndSubscribe');
var UnpublishAndUnsubscribe = require('../lib/messages/unpublishAndUnsubscribe');
var PublishedAndSubscribed = require('../lib/messages/publishedAndSubscribed');
var UnpublishedAndUnsubscribed = require('../lib/messages/unpublishedAndUnsubscribed');

exports.MCSMessageName = function (test) {
  var mcs = new MCSMessage();
  test.equal(mcs.name, 'mCSMessage', 'Valid name');
  test.done();
}

exports.MCSMessageBody = function (test) {
  var mcs = new MCSMessage();
  test.notEqual(mcs.body, null, 'Empty message body');
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
  test.equal(joined.name, 'joined', 'Valid name');
  test.done();
}

exports.JoinedParams = function (test) {
  var joined = new Joined('hkl91odce');

  test.equal(joined.body.user_id , 'hkl91odce', 'Valid user_id');
  test.done();
}

exports.LeaveName = function (test) {
  var leave = new Leave();
  test.equal(leave.name,'leave', 'Valid name');
  test.done();
}

exports.LeaveParams = function (test) {
  var leave = new Leave('1');
  test.equal(leave.body.room_id, '1', 'Valid room id');
  test.done();
}

exports.LeftName = function (test) {
  var left = new Left();
  test.equal(left.name, 'left', 'Valid name');
  test.done();
}

exports.PublishAndSubscribeName = function (test) {
  var publishAndSubscribe = new PublishAndSubscribe();
  test.equal(publishAndSubscribe.name, 'publishAndSubscribe', 'Valid name');
  test.done();
}

exports.PublishAndSubscribeParams = function (test) {
  var sdp = 'v=0 o=jdoe 2890844526 2890842807 IN IP4 10.47.16.5.....'
  var publishAndSubscribe = new PublishAndSubscribe('M53al0p',sdp);
  test.equal(publishAndSubscribe.body.media_id, 'M53al0p', 'Valid media_id');
  test.equal(publishAndSubscribe.body.sdp, sdp, 'Valid SDP');
  test.done();
}

exports.UnpublishAndUnsubscribeName = function (test) {
  var unpublishAndUnsubscribe = new UnpublishAndUnsubscribe();
  test.equal(unpublishAndUnsubscribe.name, 'unpublishAndUnsubscribe', 'Valid name');
  test.done();
}

exports.UnpublishAndUnsubscribeParams = function (test) {
  var unpublishAndUnsubscribe = new UnpublishAndUnsubscribe('A345Qxh2');
  test.equal(unpublishAndUnsubscribe.body.media_id, 'A345Qxh2', 'Valid media_id');
  test.done();
}

exports.PublishedAndSubscribedName = function (test) {
  var publishedAndSubscribed = new PublishedAndSubscribed();
  test.equal(publishedAndSubscribed.name, 'publishedAndSubscribed', 'Valid name');
  test.done();
}

exports.PublishedAndSubscribedParams = function (test) {
  var sdp = 'v=0 o=jdoe 2890844526 2890842807 IN IP4 10.47.16.5.....'
  var publishedAndSubscribed = new PublishedAndSubscribed(sdp);
  test.equal(publishedAndSubscribed.body.sdp, sdp, 'Valid SDP');
  test.done();
}

exports.UnpublishedAndUnsubscribedName = function (test) {
  var unpublishedAndUnsubscribed = new UnpublishedAndUnsubscribed();
  test.equal(unpublishedAndUnsubscribed.name, 'unpublishedAndUnsubscribed', 'Valid name');
  test.done();
}

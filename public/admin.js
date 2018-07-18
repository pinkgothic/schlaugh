"use strict";

var tests = [ //array of arrays, each inner array contains two statements that are supposed to be equal
  [pool.userNameValidate(), "need a name!", "pool.userNameValidate()"],
  [pool.userNameValidate(0), false, "pool.userNameValidate(0)"],
  [pool.userNameValidate('6as5df4'), false, "pool.userNameValidate(0)"],
]

/* this is a test of the cryption stuff, but it's asynch,
                            so figure out how to put it in the tester...
makeKeys('password', function (key) {
  encrypt("mmeessssaaggee", key.pubKey, function (crypt) {
    decrypt(crypt, decryptPrivKey('password', key.privKey), function (text) {
      console.log(text);
    });
  });
});
*/


var displayTests = function (results) {
  if (typeof results === "string") {
    $('test-title').innerHTML = results;
  } else {
    $('test-title').innerHTML = "failing tests:";
    var bucket = document.createElement("ul");
    for (var i = 0; i < results.length; i++) {
      var x = document.createElement("li");
      x.innerHTML = results[i][0] + ".  " + results[i][2]+" === "+results[i][1];
      bucket.appendChild(x);
    }
    $('test-results').appendChild(bucket);
  }
}

var getUsers = function () {
  ajaxCall('/admin/users', 'GET', {}, function(json) {
    console.log(JSON.parse(json));
  });
}

var purge = function () {
  ajaxCall('/admin/purge', 'POST', {}, function(json) {
    console.log(json);
  });
}

var resetTest = function () {
  ajaxCall('/admin/resetTest', 'POST', {}, function(json) {
    console.log(json);
  });
}

var removeUser = function () {
  ajaxCall('/admin/removeUser', 'POST', {name: $("name-to-be-removed").value}, function(json) {
    console.log(json);
  });
}

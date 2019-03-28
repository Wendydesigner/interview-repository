'use strict';

var input = document.getElementById('input');
var p = document.getElementById('p');
var obj = {};

var newObj = new Proxy(obj, {
  get: function get(target, key, receiver) {
    console.log('getting');
    return Reflect.get(target, key, receiver);
  },
  set: function set(target, key, value, receiver) {
    console.log(target, key, value, receiver);
    if (key === 'text') {
      input.value = value;
      p.innerHTML = value;
    }
    return Reflect.set(target, key, value, receiver);
  }
});

input.addEventListener('keyup', function (e) {
  newObj.text = e.target.value;
});
console.log(newObj.text);
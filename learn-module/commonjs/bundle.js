(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
var x = {
  name: 'kitty'
};
var outputX = function (value) {
  return x;
};
module.exports= {
  x,
  outputX
}
},{}],2:[function(require,module,exports){
//example2.js
module.exports = function() {
  console.log('example2')
}
},{}],3:[function(require,module,exports){
const example = require('./example.js')
const example2 = require('./example2.js')

example2();
console.log(example.x); 
},{"./example.js":1,"./example2.js":2}]},{},[3]);

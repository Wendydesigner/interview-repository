(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addX = addX;
var x = exports.x = 5;
function addX() {
  return exports.x = x += 1, x - 1;
};
},{}],2:[function(require,module,exports){
'use strict';

var _example = require('./example.js');

console.log(_example.x); // 5
//index.js
(0, _example.addX)();
console.log(_example.x); // 6
},{"./example.js":1}]},{},[2]);

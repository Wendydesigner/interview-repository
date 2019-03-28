(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Object.defineProperty
 */

var uid = 0;
// 订阅者subscribe
function Dep() {
  this.id = uid++;
  this.subs = [];
}
Dep.prototype.depend = function () {
  Dep.target.addDep(this);
};
Dep.prototype.addSub = function (sub) {
  this.subs.push(sub);
};
Dep.prototype.notify = function () {
  this.subs.forEach(function (sub) {
    return sub.update();
  });
};
Dep.target = null;

// 观察者 observer初始化： 为data添加get/set属性
function Observer(value) {
  this.value = value;
  this.walk(value);
}
Observer.prototype.walk = function (value) {
  var _this = this;

  Object.keys(value).forEach(function (key) {
    return _this.convert(key, value[key]);
  });
};
Observer.prototype.convert = function (key, val) {
  defineReactive(this.value, key, val);
};
// 属性get/set
function defineReactive(obj, key, val) {
  var dep = new Dep();
  console.log(dep);
  var childOb = observer(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function get() {
      if (Dep.target) {
        dep.depend();
      }
      return val;
    },
    set: function set(newVal) {
      if (val === newVal) return;
      val = newVal;
      childOb = observer(newVal);
      dep.notify();
    }
  });
}

function observer(value) {
  if (!value || (typeof value === 'undefined' ? 'undefined' : _typeof(value)) !== 'object') return;
  return new Observer(value);
}

// watcher观察者
// （demo, 'text', cb）
function Watcher(vm, expOrFn, cb) {
  this.depIds = {}; // hash存储订阅着的id
  this.vm = vm;
  this.cb = cb;
  this.expOrFn = expOrFn;
  this.val = this.get();
}
Watcher.prototype.update = function () {
  this.run();
};
Watcher.prototype.addDep = function (dep) {
  if (!this.depIds.hasOwnProperty(dep.id)) {
    dep.addSub(this);
    this.depIds[dep.id] = dep;
  }
};
Watcher.prototype.run = function () {
  var val = this.get();
  console.log(this, val, this.val);
  if (val !== this.val) {
    this.val = val;
    this.cb.call(this.vm, val);
  }
};
Watcher.prototype.get = function () {
  Dep.target = this;
  var val = this.vm._data[this.expOrFn];// 触发data的defineReactive
  Dep.target = null;
  return val;
};
// 初始化数据: _proxy的作用是将text作为Vue的一个属性
function Vue() {
  var _this2 = this;

  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  this.$options = options;
  this._data = this.$options.data;
  var data = this._data;
  // _proxy的作用是将text作为Vue的一个属性
  Object.keys(data).forEach(function (key) {
    return _this2._proxy(key);
  });
  // 为data添加get/set属性
  var data1 = observer(data);
  console.log(this.$options.data, this._data, data);
  console.log(data1);
}
Vue.prototype.$watch = function (expOrFn, cb) {
  var watcher1 = new Watcher(this, expOrFn, cb);
  console.log(watcher1);
};
Vue.prototype._proxy = function (key) {
  var _this3 = this;

  Object.defineProperty(this, key, {
    configurable: true,
    enumerable: true,
    get: function get() {
      _this3._data[key];
    },
    set: function set(val) {
      _this3._data[key] = val;
    }
  });
};
var demo = new Vue({
  data: {
    text: '',
    list: ''
  }
});

var p = document.getElementById('p');
var input = document.getElementById('input');

input.addEventListener('keyup', function (e) {
  demo.text = e.target.value;
});
console.log(demo)

demo.$watch('text', function (str) {
  return p.innerHTML = str;
});
},{}]},{},[1]);

/**
 * Object.defineProperty
 */

let uid = 0;
// 订阅者subscribe
function Dep() {
    this.id = uid++;
    this.subs = [];
}
  Dep.prototype.depend = function() {
    Dep.target.addDep(this);
  }
  Dep.prototype.addSub = function(sub) {
    this.subs.push(sub);
  }
  Dep.prototype.notify = function() {
    this.subs.forEach(sub => sub.update());
  }
Dep.target = null;

// 观察者 observer
function Observer(value) {
    this.value = value;
    this.walk(value);
}
Observer.prototype.walk = function(value) {
    Object.keys(value).forEach(key => this.convert(key, value[key]));
}
Observer.prototype.convert = function(key, val) {
    defineReactive(this.value, key, val);
  }

function defineReactive(obj, key, val) {
  const dep = new Dep();
  let childOb = observer(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: () => {
      if(Dep.target) {
        dep.depend();
      }
      return val;
    },
    set: (newVal) => {
      if(val === newVal) return;
      val = newVal;
      childOb = observer(newVal);
      dep.notify();
    }
  })
}

function observer(value) {
  if(!value || typeof value !== 'object') return;
  return new Observer(value);
}


// watcher观察者
function Watcher (vm, expOrFn, cb) {
    this.depIds = {}; // hash存储订阅着的id
    this.vm = vm;
    this.cb = cb;
    this.expOrFn = expOrFn;
    this.val = this.get();
}
Watcher.prototype.update = function() {
    this.run();
  }
  Watcher.prototype.addDep= function(dep) {
    if(!this.depIds.hasOwnProperty(dep.id)) {
      dep.addSub(this);
      this.depIds[dep.id] = dep;
    }
  }
  Watcher.prototype.run = function() {
    const val = this.get();
    if(val !== this.val) {
      this.val = val;
      this.cb.call(this.vm, val);
    }
  }
  Watcher.prototype.get = function() {
    Dep.target = this;
    const val = this.vm._data[this.expOrFn];
    Dep.target = null;
    return val;
  }

function Vue(options = {}){
    this.$options = options;
    this._data = this.$options.data;
    let data = this._data;
    Object.keys(data).forEach(key => this._proxy(key));
    observer(data);
}
Vue.prototype.$watch = function(expOrFn, cb) {
  new Watcher(this, expOrFn, cb);
}
Vue.prototype._proxy = function(key) {
  Object.defineProperty(this, key, {
    configurable: true,
    enumerable: true,
    get: () => {
      this._data[key];
    },
    set: (val) => {
      this._data[key] = val;
    }
  })
}
const demo = new Vue({
  data: {
    text: ''
  }
})
console.log(demo)

const p = document.getElementById('p');
const input = document.getElementById('input');

input.addEventListener('keyup', function(e) {
  demo.text = e.target.value;
});

demo.$watch('text', str => p.innerHTML = str);
console.log(demo)
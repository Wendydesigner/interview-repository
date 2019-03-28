/**
 * 发布-订阅的设计模式
 */
function Emitter() {
    this._event = {};
}
Emitter.prototype.emit = function(type, ...args) {
  const handlers = this._event[type];
  if(handlers && handlers.length > 0) {
    handlers.forEach(handler => {
      handler.apply(this, args)
    })
  } 
}
Emitter.prototype.addListener = function(type, handler) {
  if(this._event[type] === undefined) {
    this._event[type] = [].concat([handler]);
  } else {
    this._event[type].push(handler);
  }
}
Emitter.prototype.removeListener = function(type) {
  if(this._event[type]) {
    delete this._event[type];
  }
}
const obj = new Emitter();
obj.addListener("change", man => {console.log(man)})
obj.addListener("change", man => {console.log(`hello${man}`)})
obj.removeListener("change");
obj.emit("change", "miaomiao")

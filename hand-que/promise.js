function newPromise(task) {
    let self = this;
    self.status = 'pending';
    self.value = undefined;
    self.onResolveCallbacks = [];
    self.onRejectCallbacks = [];
    function resolve(value) {
        if(value instanceof newPromise) {
            return value.then(resolve, reject);
        }
        setTimeout(() => {
            if(self.status === 'pending') {
                self.value = value;
                self.status = 'resolved';
                self.onResolveCallbacks.forEach(item => item(self.value));
            }
        })
    }
    function reject() {
        setTimeout(() => {
            if(self.status === 'pending') {
                self.value = value;
                self.status = 'rejected';
                self.onRejectCallbacks.forEach(item => item(self.value));
            }
        })
    }
    try {
        task(resolve, reject);
    } catch(e) {
        reject(e)
    }
}
newPromise.prototype.then = function(onFulfilled, onRejected) {
    let self = this;
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : val => val;
    onRejected = typeof onRejected === 'function' ? onRejected : val => { throw val;}
    let promise2;
    if(self.status === 'resolved') {
        promise2 = new newPromise((resolve, reject) => {
            setTimeout(() => {
                try{
                    let data = onFulfilled(self.data);
                    resolvePromise(promise2, data, resolve, reject);
                } catch(e) {
                    reject(e);
                }
            })
        })
    }
    if(self.status === 'rejected') {
        promise2 = new newPromise((resolve, reject) => {
            setTimeout(() => {
                try{
                    let data = onRejected(self.data);
                    resolvePromise(promise2, data, resolve, reject);
                } catch(e) {
                    reject(e);
                }
            })
        })
    }
    if(self.status === 'pending') {
        promise2 = new newPromise((resolve, reject) => {
            self.onResolveCallbacks.push((val) => {
                try{
                    let data = onFulfilled(val);
                    resolvePromise(promise2, data, resolve, reject);
                } catch(e) {
                    reject(e);
                }
            })
            self.onRejectCallbacks.push((val) => {
                try{
                    let data = onRejected(val);
                    resolvePromise(promise2, data, resolve, reject);
                } catch(e) {
                    reject(e);
                }
            })
        })
    }
    return promise2;  
}
newPromise.prototype.catch = function() {}
newPromise.prototype.finally = function() {}


new newPromise().resolve(23).then((res,err)=> {})

function fn(resolve, reject) {
    resolve()
}


function conPromise(fn) {
    this._state = 0;
    this._value = null;
    this._deferreds = [];
    try {
        fn()
    } catch(err) {
    }
} 
function Handler(onResolved, onRejected, promise) {
    this.onResolved = typeof onResolved === 'function' ? onResolved : null;
    this.onRejected = typeof onRejected === 'function' ? onRejected : null;
    this.promise = promise;
}
conPromise.prototype.then = function(onResolved, onRejected) {
    var res = new conPromise(function() {});
    var defferd = new Handler(onResolved, onRejected);
    if(this._state === 0) {
        this._deferreds.push(defferd);
        return res;
    }
    handleResolved(this, defferd);
    return res;
}
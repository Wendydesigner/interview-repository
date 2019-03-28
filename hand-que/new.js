function person() {}

function newcreate(obj) {
    var newObj = Object.create(null);
    var proto = obj.prototype;
    newObj._proto_ = proto;
    return newObj;
}

var newObject = newcreate(person)
console.log(newObject)

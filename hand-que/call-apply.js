Function.prototype.newBind = function(obj) {
    var content = this;
    return function(...args) {
        content.call(obj, ...args)
    } 
}
Function.prototype.newApply = function(obj, params) {
    if(typeof obj === 'object') {
        obj = obj || window;
    } else {
        obj = Object.create(null);
    }
    obj.fn = this;
    obj.fn(...params);
    delete obj.fn;
}
Function.prototype.newCall = function(obj, ...args) {
    if(typeof obj === 'object') {
        obj = obj || window;
    } else {
        obj = Object.create(null);
    }
    obj.fn = this;
    obj.fn(...args);
    delete obj.fn;
}
function person() {
    this.name= 'person';
}
person.prototype.getName = function (sex, age) {
    console.log(this.name, sex, age)
}

function Student(name) {
    this.name = name;
}
const student = new Student('student');
person.prototype.getName.newCall(student, 'female', '28')
person.prototype.getName.newApply(student, ['female', '28'])
person.prototype.getName.newBind(student)('female', '28')

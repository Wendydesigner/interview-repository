// 1
var name = 'global';
var obj = {
  name: 'object',
  fun: function() {
    this.name = 'demo';
    return function() {
      console.log(this.name);
    }.bind(this);
  }
}
obj.fun().call(this);
// 2
var b = {
  i : 1,
  toString: function() {
    return b.i++;
  }
}
if(b == 1 && b == 2 && b == 3) {
  console.log(b.i);
}
// 3
var a = 0;
var b = async function() {
  a = a + await 10;
  console.log('b', a);
}
b();
a++;
console.log('a', a);


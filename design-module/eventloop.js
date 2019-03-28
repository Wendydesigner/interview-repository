// console.log('start')
// process.nextTick(function() {
//   setTimeout(() => {
//     console.log('timeout');
//   }, 0)
//   setImmediate(() => {
//       console.log('immediate')
//   })
// })
// process.nextTick(()=>{
//   console.log('nextTick')
//   process.nextTick(()=>{
//     console.log('nextTick')
//   })
// })
setTimeout(()=>{
  console.log('setTimeout1')
  Promise.resolve().then(function() {
    console.log('promise1')
  })
},0)
setTimeout(()=>{
  console.log('setTimeout2')
  Promise.resolve().then(function() {
    console.log('promise2')
  })
},0)
// setImmediate(()=>{
//   console.log('setTimeout0')
//   Promise.resolve().then(function() {
//     console.log('promise0')
//   })
// })
// const fs = require('fs')
// fs.readFile(__filename, () => {
//     setTimeout(() => {
//         console.log('timeout');
//     }, 0)
//     setImmediate(() => {
//         console.log('immediate')
//     })
// })

// setTimeout(()=>{
//   setTimeout(() => {
//     console.log('console1');
//   }, 0)
//   console.log('console2');
//   setTimeout(() => {
//     console.log('console3');
//   }, 200)
// })
// setTimeout(() => {
//   console.log('console4');
// }, 200);
// console.log('console5')
// 5,2,1,4,3


// function a() {this.b = 3}
// var c = new a();
// a.prototype.b = 9;
// var b = 7;
// a()
// console.log(b)
// console.log(c.b)


// console.log('end')


// const fs = require('fs')

// fs.readFile('test.txt', () => {
//   console.log('readFile')
//   setTimeout(() => {
//     console.log('timeout')
//   }, 0)
//   setImmediate(() => {
//     console.log('immediate')
//   })
// })

// poll => process.nextTick => check 
// poll => check => callback => timer => i/O => prepare

// var fs = require('fs');

// fs.readFile(__filename, () => {
//   console.log('finish reading');
// });

// var index = 0;

// function Immediate () {
//   if (index > 11) return;
//   index++;
//   console.log('setImmediate');
//   setImmediate(Immediate);
// }

// Immediate()
const fs = require('fs');

//包装返回Promise对象的函数
function readFile(fileName) {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, (error, data) => {
            if (error) {
                reject(error)
            } else {
                resolve(data)
            }
        })
    })
}
 
// 编写Generator
let gen = function* () {
    let r1 = yield readFile('./package.json')
    console.log(r1.toString())
    let r2 = yield readFile('./index.js')
    console.log(r2.toString())
}

/** let g = gen()
let r1 = g.next()
r1.value(function (err, data) {
    if (err) {
        throw err
    }
    let r2 = g.next(data)
    r2.value(function (err, data) {
        if (err) {
            throw err
        }
        g.next(data)
    })
})
*/

// 编写Generator执行器
function run(gen) {
    let g = gen()
    function next(data) {
        let result = g.next(data)
        if (result.done) {
            return result.value
        }
        result.value.then((data) => next(data))
    }
    next()
}

//用Generator执行器自动执行
run(gen)

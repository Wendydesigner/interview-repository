(function () {
  require.config({
    paths: {
      example: './example'  // 不能写example.js会报错
    }
  })

  require(['example'], function(example) {
    console.log(example.add(2, 2))
  })
})()
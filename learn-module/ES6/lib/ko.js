"use strict";
$traceurRuntime.ModuleStore.getAnonymousModule(function() {
    "use strict";
    var $__1 = $traceurRuntime.initGeneratorFunction(start);
    function timeout(ms) {
      return {text: 'done'};
    }
    function start() {
      var res;
      return $traceurRuntime.createGeneratorInstance(function($ctx) {
        while (true)
          switch ($ctx.state) {
            case 0:
              $ctx.state = 2;
              return timeout(1000);
            case 2:
              res = $ctx.sent;
              $ctx.state = 4;
              break;
            case 4:
              $ctx.returnValue = res;
              $ctx.state = -2;
              break;
            default:
              return $ctx.end();
          }
      }, $__1, this);
    }
    ;
    function fn(args) {
      return spawn(start);
    }
    function spawn(genF) {
      return new Promise(function(resolve, reject) {
        var gen = genF();
        function step(nextF) {
          var next;
          try {
            next = nextF();
          } catch (e) {
            return reject(e);
          }
          if (next.done) {
            return resolve(next.value);
          }
          Promise.resolve(next.value).then(function(v) {
            step(function() {
              return gen.next(v);
            });
          }, function(e) {
            step(function() {
              return gen.throw(e);
            });
          });
        }
        step(function() {
          return gen.next();
        });
      });
    }
    fn().then(function(data) {
      console.log(data);
    });
    return {};
  });
  //# sourceURL=traceured.js
  
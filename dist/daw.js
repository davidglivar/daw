(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() : typeof define === 'function' && define.amd ? define(factory) : global.daw = factory();
})(this, function () {
  'use strict';

  var Another = {
    anotherFn: function anotherFn() {
      return 'ok';
    }
  };

  var MyLibrary = {
    anotherFn: function anotherFn() {
      return Another.anotherFn() + ', friend';
    },
    mainFn: function mainFn() {
      return 'hello';
    }
  };

  var index = MyLibrary;

  return index;
});
//# sourceMappingURL=./daw.js.map
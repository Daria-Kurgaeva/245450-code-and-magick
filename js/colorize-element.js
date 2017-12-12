'use strict';

window.colorizeElement = (function () {
  return {
    getRandomValueOfArr: function (arr) {
      var rnd = Math.floor(Math.random() * arr.length);
      return arr[rnd];
    }
  };
})();

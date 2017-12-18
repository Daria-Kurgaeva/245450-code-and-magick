'use strict';

window.util = (function () {
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;

  return {
    isEscEvent: function (event, action) {
      if (event.keyCode === ESC_KEYCODE) {
        action();
      }
    },

    isEnterEvent: function (event, action) {
      if (event.keyCode === ENTER_KEYCODE) {
        action();
      }
    },

    getRandomValueOfArr: function (arr) {
      var rnd = Math.floor(Math.random() * arr.length);
      return arr[rnd];
    }

  };
})();

'use strict';

(function () {
  var setupArea = document.querySelector('.setup');
  var setupUserPic = setupArea.querySelector('.setup-user-pic');
  setupUserPic.style.zIndex = 1000;


  var dragSetupArea = function (event) {
    event.preventDefault();

    var startCoords = {
      x: event.clientX,
      y: event.clientY
    };

    var onMouseMove = function (moveEvent) {
      moveEvent.preventDefault();

      var shift = {
        x: startCoords.x - moveEvent.clientX,
        y: startCoords.y - moveEvent.clientY
      };

      startCoords = {
        x: moveEvent.clientX,
        y: moveEvent.clientY
      };

      setupArea.style.top = (setupArea.offsetTop - shift.y) + 'px';
      setupArea.style.left = (setupArea.offsetLeft - shift.x) + 'px';

    };

    var onMouseUp = function (upEvent) {
      upEvent.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('moveup', onMouseUp);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  };

  setupUserPic.addEventListener('mousedown', dragSetupArea);

})();
'use strict';

(function () {
  var setupArea = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = document.querySelector('.setup-close');
  var setupUserName = setupArea.querySelector('.setup-user-name');

  var openPopup = function () {
    setupArea.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
  };

  var onSetupOpenClick = function () {
    openPopup();
  };

  var onSetupOpenEnterPress = function (event) {
    window.util.isEnterEvent(event, openPopup);
  };

  var closePopup = function () {
    setupArea.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
  };

  var onSetupCloseClick = function () {
    closePopup();
  };

  var onSetupCloseEnterPress = function (event) {
    window.util.isEnterEvent(event, closePopup);
  };


  var onPopupEscPress = function (event) {
    if (event.target !== setupUserName) {
      window.util.isEscEvent(event, closePopup);
    }
  };

  var initPopupEventListeners = function () {
    setupOpen.addEventListener('click', onSetupOpenClick);
    setupOpen.addEventListener('keydown', onSetupOpenEnterPress);
    setupClose.addEventListener('click', onSetupCloseClick);
    setupClose.addEventListener('keydown', onSetupCloseEnterPress);
  };

  initPopupEventListeners();

})();

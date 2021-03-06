'use strict';

(function (util, backend) {
  var setupArea = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = document.querySelector('.setup-close');
  var setupUserName = setupArea.querySelector('.setup-user-name');
  var wizardForm = setupArea.querySelector('.setup-wizard-form');
  var artifactsShop = document.querySelector('.setup-artifacts-shop');
  var boughtArtifacts = document.querySelector('.setup-artifacts');
  var draggedItem = null;

  var openPopup = function () {
    setupArea.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
  };

  var onSetupOpenClick = function () {
    openPopup();
  };

  var onSetupOpenEnterPress = function (event) {
    util.isEnterEvent(event, openPopup);
  };

  var closePopup = function () {
    setupArea.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
    setupArea.style.top = '80px';
    setupArea.style.left = '50%';
  };

  var onSetupCloseClick = function () {
    closePopup();
  };

  var onSetupCloseEnterPress = function (event) {
    util.isEnterEvent(event, closePopup);
  };


  var onPopupEscPress = function (event) {
    if (event.target !== setupUserName) {
      util.isEscEvent(event, closePopup);
    }
  };

  var onSubmit = function () {
    event.preventDefault();
    backend.save(new FormData(wizardForm), closePopup, backend.showError);
  };

  var initPopupEventListeners = function () {
    setupOpen.addEventListener('click', onSetupOpenClick);
    setupOpen.addEventListener('keydown', onSetupOpenEnterPress);
    setupClose.addEventListener('click', onSetupCloseClick);
    setupClose.addEventListener('keydown', onSetupCloseEnterPress);
    wizardForm.addEventListener('submit', onSubmit);
  };

  var onDragStart = function (event) {
    if (event.target.tagName.toLowerCase() === 'img') {
      draggedItem = event.target;
      event.dataTransfer.setData('text/plain', event.target.alt);
      boughtArtifacts.style.outline = '2px dashed red';
    }
  };

  var onDragOver = function (event) {
    event.preventDefault();
    return false;
  };

  var onDrop = function (event) {
    event.preventDefault();
    boughtArtifacts.style.outline = '';

    if (event.target.classList.contains('setup-artifacts-cell') && event.target.innerHTML === '') {
      event.target.style.backgroundColor = '';
      event.target.appendChild(draggedItem.cloneNode(true));
    }
  };

  var onDragEnter = function (event) {
    event.preventDefault();
    if (event.target.classList.contains('setup-artifacts-cell') && event.target.innerHTML === '') {
      event.target.style.backgroundColor = 'yellow';
    }
  };

  var onDragLeave = function (event) {
    event.preventDefault();
    event.target.style.backgroundColor = '';
  };

  var initDragAndDropEventListeners = function () {
    artifactsShop.addEventListener('dragstart', onDragStart);
    boughtArtifacts.addEventListener('dragover', onDragOver);
    boughtArtifacts.addEventListener('drop', onDrop);
    boughtArtifacts.addEventListener('dragenter', onDragEnter);
    boughtArtifacts.addEventListener('dragleave', onDragLeave);
  };

  initPopupEventListeners();
  initDragAndDropEventListeners();

})(window.util, window.backend);

'use strict';

(function (util, colorizeElement, similar) {
  // Переменные-массивы //
  var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
  var fireballColors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  // Переменные для поиска в DOM //
  var setupArea = document.querySelector('.setup');
  var wizardCoat = setupArea.querySelector('.wizard-coat');
  var wizardEyes = setupArea.querySelector('.wizard-eyes');
  var wizardFireball = setupArea.querySelector('.setup-fireball-wrap');

  var fillCoat = function (elem, arr) {
    var newColor = util.getRandomValueOfArr(arr);
    elem.style.fill = newColor;
    similar.onCoatChange(newColor);
  };

  var fillEyes = function (elem, arr) {
    var newColor = util.getRandomValueOfArr(arr);
    elem.style.fill = newColor;
    similar.onEyesChange(newColor);
  };

  var changeElementBackground = function (elem, arr) {
    elem.style.backgroundColor = util.getRandomValueOfArr(arr);
  };
  var onWizardCoatClick = function () {
    colorizeElement(wizardCoat, coatColors, fillCoat);
  };

  var onWizardEyesClick = function () {
    colorizeElement(wizardEyes, eyesColors, fillEyes);
  };

  var onWizardFireballClick = function () {
    colorizeElement(wizardFireball, fireballColors, changeElementBackground);
  };

  var initWizardEventListeners = function () {
    wizardCoat.addEventListener('click', onWizardCoatClick);
    wizardEyes.addEventListener('click', onWizardEyesClick);
    wizardFireball.addEventListener('click', onWizardFireballClick);
  };

  initWizardEventListeners();

})(window.util, window.colorizeElement, window.similar);

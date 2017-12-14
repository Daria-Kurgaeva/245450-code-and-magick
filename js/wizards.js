'use strict';

(function (colorizeElement, backend) {
  // Переменные-массивы //
  var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
  var fireballColors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  // Переменные для поиска в DOM //
  var template = document.querySelector('#similar-wizard-template').content;
  var setupSimilar = document.querySelector('.setup-similar');
  var setupSimilarList = document.querySelector('.setup-similar-list');
  var setupArea = document.querySelector('.setup');
  var wizardCoat = setupArea.querySelector('.wizard-coat');
  var wizardEyes = setupArea.querySelector('.wizard-eyes');
  var wizardFireball = setupArea.querySelector('.setup-fireball-wrap');

  // Находим рандомный элемент массива //
  var getRandomValueOfArr = function (arr) {
    var rnd = Math.floor(Math.random() * arr.length);
    return arr[rnd];
  };


  // Генерируем волшебников //
  var createWizardBlock = function (wizard) {
    var wizardBlock = template.cloneNode(true);
    wizardBlock.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardBlock.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardBlock.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;
    return wizardBlock;
  };

  var renderWizards = function (wizards) {
    var fragment = document.createDocumentFragment();
    var wizardCount = 4;
    var wizardsArr = wizards.slice();

    for (var i = 0; i < wizardCount; i++) {
      var randomWizard = getRandomValueOfArr(wizardsArr);
      fragment.appendChild(createWizardBlock(randomWizard));
    }

    setupSimilarList.appendChild(fragment);
  };

  // Показываем диалоговое окно //
  var showSetupSimilar = function () {
    setupSimilar.classList.remove('hidden');
  };

  var onLoad = function (wizards) {
    renderWizards(wizards);
    showSetupSimilar();
  };

  var fillElement = function (elem, arr) {
    elem.style.fill = getRandomValueOfArr(arr);
  };

  var changeElementBackground = function (elem, arr) {
    elem.style.backgroundColor = getRandomValueOfArr(arr);
  };

  var onWizardCoatClick = function () {
    colorizeElement(wizardCoat, coatColors, fillElement);
  };

  var onWizardEyesClick = function () {
    colorizeElement(wizardEyes, eyesColors, fillElement);
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
  backend.load(onLoad, backend.showError);

})(window.colorizeElement, window.backend);

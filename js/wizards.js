'use strict';

(function (colorizeElement) {
  // Переменные-массивы //
  var wizardNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var wizardLastNames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
  var fireballColors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  // Переменные для поиска в DOM //
  var template = document.querySelector('#similar-wizard-template').content;
  var setupSimilarList = document.querySelector('.setup-similar-list');
  var setupArea = document.querySelector('.setup');
  var wizardCoat = setupArea.querySelector('.wizard-coat');
  var wizardEyes = setupArea.querySelector('.wizard-eyes');
  var wizardFireball = setupArea.querySelector('.setup-fireball-wrap');

  // Отрисовываем и клонируем волшебников //
  var createWizardBlock = function (wizard) {
    var wizardBlock = template.cloneNode(true);
    wizardBlock.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardBlock.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardBlock.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
    setupSimilarList.appendChild(wizardBlock);
  };

  // Формируем особенности каждого волшебника (имя, цвет мантии и глаз) //
  var createWizard = function () {
    var wizard = {
      name: colorizeElement.getRandomValueOfArr(wizardNames) + ' ' + colorizeElement.getRandomValueOfArr(wizardLastNames),
      coatColor: colorizeElement.getRandomValueOfArr(coatColors),
      eyesColor: colorizeElement.getRandomValueOfArr(eyesColors),
    };
    return wizard;
  };

  // Цикл для генерации волшебников //
  var renderWizards = function (count) {
    for (var i = 0; i < count; i++) {
      var wizard = createWizard();
      createWizardBlock(wizard);
    }
  };

  // Показываем диалоговое окно //
  var showSetup = function () {
    var wizardCount = 4;
    var setupSimilar = document.querySelector('.setup-similar');
    renderWizards(wizardCount);
    setupSimilar.classList.remove('hidden');
  };

  showSetup();

  var fillElement = function (elem, arr) {
    elem.style.fill = colorizeElement.getRandomValueOfArr(arr);
  };

  var changeElementBackground = function (elem, arr) {
    elem.style.backgroundColor = colorizeElement.getRandomValueOfArr(arr);
  };

  var onWizardCoatClick = function () {
    fillElement(wizardCoat, coatColors);
  };

  var onWizardEyesClick = function () {
    fillElement(wizardEyes, eyesColors);
  };

  var onWizardFireballClick = function () {
    changeElementBackground(wizardFireball, fireballColors);
  };

  wizardCoat.addEventListener('click', onWizardCoatClick);

  wizardEyes.addEventListener('click', onWizardEyesClick);

  wizardFireball.addEventListener('click', onWizardFireballClick);

})(window.colorizeElement);

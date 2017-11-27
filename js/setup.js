'use strict';

var wizardNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var wizardLastNames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
var template = document.querySelector('#similar-wizard-template').content;
var setupSimilarList = document.querySelector('.setup-similar-list');

var createArray = function (arr) {
  var rnd = Math.floor(Math.random() * arr.length);
  return arr[rnd];
};

var createWizardBlock = function (wizard) {
  var wizardBlock = template.cloneNode(true);
  wizardBlock.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardBlock.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardBlock.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  setupSimilarList.appendChild(wizardBlock);
};

var createWizard = function () {
  var wizard = {
    name: createArray(wizardNames) + ' ' + createArray(wizardLastNames),
    coatColor: createArray(coatColors),
    eyesColor: createArray(eyesColors),
  };
  return wizard;
};

var renderWizards = function (count) {
  for (var i = 0; i < count; i++) {
    var wizard = createWizard();
    createWizardBlock(wizard);
  }
};

var showSetup = function () {
  var wizardCount = 4;
  var setupArea = document.querySelector('.setup');
  var setupSimilar = document.querySelector('.setup-similar');

  renderWizards(wizardCount);
  setupArea.classList.remove('hidden');
  setupSimilar.classList.remove('hidden');
};

showSetup();

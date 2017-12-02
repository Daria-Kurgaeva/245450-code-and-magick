'use strict';
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
var setupOpen = document.querySelector('.setup-open');
var setupClose = document.querySelector('.setup-close');
var wizardCoat = setupArea.querySelector('.wizard-coat');
var wizardEyes = setupArea.querySelector('.wizard-eyes');
var wizardFireball = setupArea.querySelector('.setup-fireball-wrap');
var setupUserName = setupArea.querySelector('.setup-user-name');

// Константы //
var ENTER_KEYCODE = 13;
var ESC_KEYCODE = 27;

// Находим рандомный элемент массива //
var getRandomValueOfArr = function (arr) {
  var rnd = Math.floor(Math.random() * arr.length);
  return arr[rnd];
};

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
    name: getRandomValueOfArr(wizardNames) + ' ' + getRandomValueOfArr(wizardLastNames),
    coatColor: getRandomValueOfArr(coatColors),
    eyesColor: getRandomValueOfArr(eyesColors),
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

// Обработка событий //
var openPopup = function () {
  setupArea.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (event) {
  if (event.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

var closePopup = function () {
  setupArea.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (event) {
  if (event.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

var onPopupEscPress = function (event) {
  if (event.keyCode === ESC_KEYCODE && event.target !== setupUserName) {
    closePopup();
  }
};

wizardCoat.addEventListener('click', function () {
  wizardCoat.style.fill = getRandomValueOfArr(coatColors);
});

wizardEyes.addEventListener('click', function () {
  wizardEyes.style.fill = getRandomValueOfArr(eyesColors);
});

wizardFireball.addEventListener('click', function () {
  wizardFireball.style.background = getRandomValueOfArr(fireballColors);
});

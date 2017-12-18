'use strict';

window.render = (function () {

  // Переменные для поиска в DOM //
  var template = document.querySelector('#similar-wizard-template').content;
  var setupSimilarList = document.querySelector('.setup-similar-list');


  // Генерируем волшебников //
  var createWizardBlock = function (wizard) {
    var wizardBlock = template.cloneNode(true);
    wizardBlock.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardBlock.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardBlock.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;
    return wizardBlock;
  };

  var renderWizards = function (data) {
    var wizardCount = 4;
    setupSimilarList.textContent = '';
    for (var i = 0; i < wizardCount; i++) {
      var similarWizard = data[i];
      setupSimilarList.appendChild(createWizardBlock(similarWizard));
    }
  };

  return {
    renderWizards: renderWizards
  };

})();

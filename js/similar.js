'use strict';

window.similar = (function (backend, render, debounce) {
  var setupSimilar = document.querySelector('.setup-similar');
  var wizards = [];
  var coatColor;
  var eyesColor;

  var showSetupSimilar = function () {
    setupSimilar.classList.remove('hidden');
  };

  var getRank = function (wizard) {
    var rank = 0;
    if (wizard.colorCoat === coatColor) {
      rank += 2;
    }
    if (wizard.colorEyes === eyesColor) {
      rank += 1;
    }
    return rank;
  };

  var namesComparator = function (left, right) {
    if (left > right) {
      return 1;
    } else if (left < right) {
      return -1;
    } else {
      return 0;
    }
  };

  var updateWizards = function () {
    render.renderWizards(wizards.sort(function (left, right) {
      var rankDiff = getRank(right) - getRank(left);
      if (rankDiff === 0) {
        rankDiff = namesComparator(left.name, right.name);
      }
      return rankDiff;
    }));
  };

  var onCoatChange = function (color) {
    coatColor = color;
    debounce.reduceDebounce(updateWizards);
  };

  var onEyesChange = function (color) {
    eyesColor = color;
    debounce.reduceDebounce(updateWizards);
  };

  var onLoad = function (data) {
    wizards = data;
    updateWizards();
    showSetupSimilar();
  };

  backend.load(onLoad, backend.showError);

  return {
    onCoatChange: onCoatChange,
    onEyesChange: onEyesChange
  };

})(window.backend, window.render, window.debounce);

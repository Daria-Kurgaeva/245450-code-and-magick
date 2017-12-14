'use strict';

(function () {
  var SERVER_URL = 'https://1510.dump.academy/code-and-magick';

  var xhrAction = function (onLoad, onError) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    var getServerStatus = function () {
      if (xhr.status === 200) {
        onLoad(xhr.response);
      } else {
        onError('Неизвестный статус: ' + xhr.status + ' ' + xhr.statusText);
      }
    };

    var showServerError = function () {
      onError('Произошла ошибка соединения');
    };

    var showSlowServerError = function () {
      onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
    };

    xhr.addEventListener('load', getServerStatus);
    xhr.addEventListener('error', showServerError);
    xhr.addEventListener('timeout', showSlowServerError);

    xhr.timeout = 10000;

    return xhr;
  };

  window.backend = {
    load: function (onLoad, onError) {
      var xhr = xhrAction(onLoad, onError);

      xhr.open('GET', SERVER_URL + '/data');
      xhr.send();
    },

    save: function (data, onLoad, onError) {
      var xhr = xhrAction(onLoad, onError);

      xhr.open('POST', SERVER_URL);
      xhr.send(data);
    },

    showError: function (errorMessage) {
      var errorWindow = document.querySelector('.setup-similar');
      errorWindow.classList.remove('hidden');
      errorWindow.style.backgroundColor = 'white';
      errorWindow.style.borderRadius = '8px';
      errorWindow.style.maxWidth = '50%';
      errorWindow.style.margin = '30px auto';
      errorWindow.style.padding = '20px';
      errorWindow.style.color = 'red';
      errorWindow.style.fontSize = '120%';
      errorWindow.style.textAlign = 'center';
      errorWindow.textContent = errorMessage;
    }
  };
})();

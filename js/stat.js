'use strict';

window.renderStatistics = function (ctx, names, times) {
  var barHeight = 150;
  var barWidth = 40;
  var indent = 50;
  var initialX = 155;
  var initialY = 250;
  var lineHeight = 20;

  var createRect = function (context, coordinateX, coordinateY, width, height) {
    context.fillRect(coordinateX, coordinateY, width, height);
  };

  var setColor = function (context, color) {
    context.fillStyle = color;
  };

  var writeText = function (context, string, coordinateX, coordinateY) {
    context.fillText(string, coordinateX, coordinateY);
  };

  /* drawing cloud */
  setColor(ctx, 'rgba(0, 0, 0, 0.7)');
  createRect(ctx, 110, 20, 420, 270);

  setColor(ctx, 'rgba(255,255,255, 1)');
  createRect(ctx, 100, 10, 420, 270);

  /* writing title */
  setColor(ctx, 'rgba(0, 0, 0, 1)');
  ctx.font = '16px PT Mono';
  writeText(ctx, 'Ура вы победили!', 130, 40);
  writeText(ctx, 'Список результатов:', 130, 60);


  var getMaxScore = function (arr) {
    var maxScore = 0;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] > maxScore) {
        maxScore = arr[i];
      }
    }
    return maxScore;
  };


  function getRandomArbitary(min, max) {
    return Math.random() * (max - min) + min;
  }

  for (var i = 0; i < times.length; i++) {
    var roundUpTime = Math.round(times[i]);
    var currentHeight = roundUpTime * barHeight / getMaxScore(times);
    if (names[i] === 'Вы') {
      setColor(ctx, 'rgba(255, 0, 0, 1)');
    } else {
      setColor(ctx, 'rgba(0, 0, 255, ' + getRandomArbitary(0.1, 0.9) + ')');
    }
    /* drawing bars */
    createRect(ctx, initialX + (barWidth + indent) * i, initialY - barHeight, barWidth, barHeight);
    setColor(ctx, 'white');
    createRect(ctx, initialX + (barWidth + indent) * i, initialY - barHeight, barWidth, barHeight - currentHeight);
    setColor(ctx, 'black');
    writeText(ctx, roundUpTime, initialX + (barWidth + indent) * i, initialY - currentHeight - lineHeight / 2);
    writeText(ctx, names[i], initialX + (barWidth + indent) * i, initialY + lineHeight);
  }
};

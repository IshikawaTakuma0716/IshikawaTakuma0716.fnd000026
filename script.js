document.getElementById('fortune-button').addEventListener('click', getFortune);
document.getElementById('training-button').addEventListener('click', getTraining);

function getFortune() {
  let fortunes = ['大吉🐊🐊🐊🐊🐊', '中吉🐊🐊🐊🐊', '小吉🐊🐊🐊', '吉🐊🐊', '凶🐊'];
  let randomIndex = Math.floor(Math.random() * fortunes.length);
  let fortune = fortunes[randomIndex];

  let fortuneText;
  if (fortune === '大吉🐊🐊🐊🐊🐊') {
    fortuneText = '最高の一日になるでしょう！';
  } else if (fortune === '中吉🐊🐊🐊🐊') {
    fortuneText = '良いことが起こる予感です！';
  } else if (fortune === '小吉🐊🐊🐊') {
    fortuneText = 'ちょっとした幸運が訪れるかもしれません！';
  } else if (fortune === '吉🐊🐊') {
    fortuneText = '平穏な日々が続くでしょう！';
  } else if (fortune === '凶🐊') {
    fortuneText = '注意が必要な一日です。慎重に行動しましょう。';
  }

  let fortuneElement = document.getElementById('fortune');
  fortuneElement.innerHTML = '今日の運勢: ' + fortune + '<br>' + fortuneText;
  fortuneElement.classList.remove('hidden');
}

function getTraining() {
  let joggingDistance = Math.floor(Math.random() * 10) + 1;
  let pushUps = Math.floor(Math.random() * 91) + 10;
  let sitUps = Math.floor(Math.random() * 91) + 10;
  let squats = Math.floor(Math.random() * 91) + 10;

  let trainingElement = document.getElementById('training');
  trainingElement.innerHTML = '今日のトレーニング:<br>ジョギング: ' + joggingDistance + 'km<br>腕立て: ' + pushUps + '回<br>腹筋: ' + sitUps + '回<br>スクワット: ' + squats + '回';
  trainingElement.classList.remove('hidden');
}

document.getElementById('training-result-button').addEventListener('click', showTrainingResultInput);
document.getElementById('save-training-button').addEventListener('click', saveTrainingResult);
document.getElementById('clear-training-history-button').addEventListener('click', clearTrainingHistory);

function showTrainingResultInput() {
  document.getElementById('training-result-input').classList.remove('hidden');
}

function saveTrainingResult() {
  let joggingDistance = document.getElementById('jogging-distance').value;
  let pushUps = document.getElementById('push-ups').value;
  let sitUps = document.getElementById('sit-ups').value;
  let squats = document.getElementById('squats').value;

  let currentDate = new Date();
  let dateString = currentDate.toLocaleDateString();
  let trainingResult = '日付: ' + dateString + ', ジョギング: ' + joggingDistance + 'km, 腕立て: ' + pushUps + '回, 腹筋: ' + sitUps + '回, スクワット: ' + squats + '回';

  // ローカルストレージに保存
  let trainingHistory = localStorage.getItem('trainingHistory');
  if (trainingHistory) {
    trainingHistory = JSON.parse(trainingHistory);
  } else {
    trainingHistory = [];
  }
  trainingHistory.push(trainingResult);
  localStorage.setItem('trainingHistory', JSON.stringify(trainingHistory));

  showTrainingHistory();
  clearTrainingInput();
}

function showTrainingHistory() {
  let trainingHistoryElement = document.getElementById('training-history');
  trainingHistoryElement.classList.remove('hidden');

  let trainingListElement = document.getElementById('training-list');
  trainingListElement.innerHTML = '';

  let trainingHistory = localStorage.getItem('trainingHistory');
  if (trainingHistory) {
    trainingHistory = JSON.parse(trainingHistory);
    trainingHistory.forEach(function(result) {
      let listItemElement = document.createElement('li');
      listItemElement.textContent = result;
      trainingListElement.appendChild(listItemElement);
    });
  }
}

function clearTrainingHistory() {
  localStorage.removeItem('trainingHistory');
  showTrainingHistory();
}

function clearTrainingInput() {
  document.getElementById('jogging-distance').value = '';
  document.getElementById('push-ups').value = '';
  document.getElementById('sit-ups').value = '';
  document.getElementById('squats').value = '';
}

// ページ読み込み時に過去のトレーニング履歴を表示
window.addEventListener('DOMContentLoaded', function() {
  showTrainingHistory();
});

'use strict'
// 1行目に記載している 'use strict' は削除しないでください

function getFortune() {
    var fortunes = ['大吉', '中吉', '小吉', '吉', '凶'];
    var randomIndex = Math.floor(Math.random() * fortunes.length);
    var fortune = fortunes[randomIndex];
    
    document.getElementById('fortune').innerHTML = '今日の運勢: ' + fortune;
  }

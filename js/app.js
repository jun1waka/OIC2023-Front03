$(document).ready(function() {
  // カレンダーを生成して表示する関数
  function generateCalendar(year, month) {
  }

  // 今日の年と月を取得します
  var today = new Date();
  var currentYear = today.getFullYear();
  var currentMonth = today.getMonth();

  // カレンダーを生成して表示します
  generateCalendar(currentYear, currentMonth);
});
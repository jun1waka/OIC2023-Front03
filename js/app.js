$(document).ready(function() {
  // カレンダーを生成して表示する関数
    function generateCalendar(year, month) {
        let firstDay = new Date(year, month)
        //月の日数取得
        let daysInMonth = new Date(year, month + 1, 0).getDate();
        //曜日の表記用配列
        let weekdayNames = ["日", "月", "火", "水", "木", "金", "土"];
        // カレンダー要素の取得
        var calendarContainer = $("#calendar-container");

        //コンテンツクリア
        calendarContainer.empty();

        let calendarDiv = $("<div>").addClass("calendar"); 
        //年月エリア作成
        //let leftArrow = $("<div>").addClass("leftarrow").text("<");
        //let rightArrow = $("<div>").addClass("rightarrow").text(">");
        //let ymMessage = $("<div>").text(year + "年 " + (month + 1) + "月");
        //let calendarHeader = $("<div>").addClass("calendar-header");
        
        let calendarHeader = $("<div>").addClass("calendar-header").text(year + "年 " + (month + 1) + "月");
        //calendarHeader.append(leftArrow);
        //calendarHeader.append(rightArrow);
        //calendarHeader.append(ymMessage);

        calendarDiv.append(calendarHeader);

        let dateRow = $("<ul>").addClass("calendar-days");
        //ヘッダ(曜日)作成
        for (var i = 0; i < 7; i++) {
            var weekdayCell = $("<li>").addClass("calendar-date weekday").text(weekdayNames[i]);
            dateRow.append(weekdayCell);
        }

        //日曜から１日まで空白作成
        for (var i = 0; i < firstDay.getDay(); i++) {
            var emptyCell = $("<li>").addClass("calendar-date");
            dateRow.append(emptyCell);
        }

        //1日から月末まで作成
        for (var i = 0; i < daysInMonth; i++) {
            var daysCell = $("<li>").addClass("calendar-date").text(i+1);
            dateRow.append(daysCell);
        }
        calendarDiv.append(dateRow);
        calendarContainer.append(calendarDiv);

  }

  // 今日の年と月を取得します
  var today = new Date();
  var currentYear = today.getFullYear();
  var currentMonth = today.getMonth();

  // カレンダーを生成して表示します
  generateCalendar(currentYear, currentMonth);
});
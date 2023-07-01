let yyyymm = new Date();

$(document).ready(function () {
    // カレンダーを生成して表示する関数
    function generateCalendar(year, month) {
        let firstDay = new Date(year, month)
        //月の日数取得
        let daysInMonth = new Date(year, month + 1, 0).getDate();
        //曜日の表記用配列
        let weekdayNames = ["日", "月", "火", "水", "木", "金", "土"];
        // カレンダー要素の取得
        let calendarContainer = $("#calendar-container");

        //コンテンツクリア
        calendarContainer.empty();

        let calendarDiv = $("<div>").addClass("calendar");
        //年月エリア作成
        let leftArrow = $("<a>").addClass("leftarrow").text("＜");
        let rightArrow = $("<a>").addClass("rightarrow").text("＞");
        let ymMessage = year + "年 " + (month + 1) + "月";
        let calendarHeader = $("<div>").addClass("calendar-header");

        //let calendarHeader = $("<div>").addClass("calendar-header").text(year + "年 " + (month + 1) + "月");
        calendarHeader.append(leftArrow);
        calendarHeader.append(ymMessage);
        calendarHeader.append(rightArrow);

        calendarDiv.append(calendarHeader);

        let dateRow = $("<ul>").addClass("calendar-days");
        //ヘッダ(曜日)作成
        for (let i = 0; i < 7; i++) {
            let weekdayCell = $("<li>").addClass("calendar-date weekday").text(weekdayNames[i]);
            dateRow.append(weekdayCell);
        }

        //日曜から１日まで空白作成
        for (let i = 0; i < firstDay.getDay(); i++) {
            let emptyCell = $("<li>").addClass("calendar-date");
            dateRow.append(emptyCell);
        }

        //1日から月末まで作成
        for (let i = 0; i < daysInMonth; i++) {
            let daysCell = $("<li>").addClass("calendar-date").text(i + 1);
            dateRow.append(daysCell);
        }
        calendarDiv.append(dateRow);
        calendarContainer.append(calendarDiv);

 //       $(".leftarrow").click(function (e) {
 //           yyyymm = new Date(yyyymm.getFullYear(), yyyymm.getMonth() - 1);
 //           generateCalendar(yyyymm.getFullYear(), yyyymm.getMonth());
 //           console.log(yyyymm);
 //       });
 //       $(".rightarrow").click(function (e) {
 //           yyyymm = new Date(yyyymm.getFullYear(), yyyymm.getMonth() + 1);
 //           generateCalendar(yyyymm.getFullYear(), yyyymm.getMonth());
 //           console.log(yyyymm);
 //       });

 //       $("a").on("click", function (e) {
 //           let element = $(this).attr("class");
 //           console.log(element);
 //
 //           if (element == "leftarrow") {
 //               yyyymm = new Date(yyyymm.getFullYear(), yyyymm.getMonth() - 1);
 //               generateCalendar(yyyymm.getFullYear(), yyyymm.getMonth());
 //               console.log(yyyymm);
 //           } else {
 //               yyyymm = new Date(yyyymm.getFullYear(), yyyymm.getMonth() + 1);
 //               generateCalendar(yyyymm.getFullYear(), yyyymm.getMonth());
 //               console.log(yyyymm);
 //           }
 //       });
        $(".leftarrow").click(function (e) {
            yyyymm = new Date(yyyymm.getFullYear(), yyyymm.getMonth() - 1);
            generateCalendar(yyyymm.getFullYear(), yyyymm.getMonth());
            console.log(yyyymm);
        });
        $(".rightarrow").click(function (e) {
            yyyymm = new Date(yyyymm.getFullYear(), yyyymm.getMonth() + 1);
            generateCalendar(yyyymm.getFullYear(), yyyymm.getMonth());
            console.log(yyyymm);
        });
    }    
  // 今日の年と月を取得します
    let today = new Date();
    let currentYear = today.getFullYear();
    let currentMonth = today.getMonth();

    // カレンダーを生成して表示します
    generateCalendar(currentYear, currentMonth);

  

 
});


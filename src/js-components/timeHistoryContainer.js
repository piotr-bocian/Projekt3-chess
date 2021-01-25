"use strict";
function timeHistoryContainer() {
    var timeHistoryContainer = document.createElement("div");
    timeHistoryContainer.className = "time-history-container";
    var timeHeader = document.createElement("div");
    timeHeader.className = "time-div";
    timeHeader.innerHTML = "CZAS GRY";
    var timer1 = document.createElement("div");
    timer1.id = "timer-white";
    var timer2 = document.createElement("div");
    timer2.id = "timer-black";
    timeHeader.appendChild(timer1);
    timeHeader.appendChild(timer2);
    timeHistoryContainer.appendChild(timeHeader);
    return timeHistoryContainer;
}
module.exports = timeHistoryContainer;

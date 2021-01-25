function timeHistoryContainer () {

    const timeHistoryContainer = document.createElement("div");
    timeHistoryContainer.className = "time-history-container";

    const timeHeader = document.createElement("div");
    timeHeader.className = "time-div";
    timeHeader.innerHTML = "CZAS GRY";

    const timer1 = document.createElement("div");
    timer1.id = "timer-white";
    const timer2 = document.createElement("div");
    timer2.id = "timer-black";

    timeHeader.appendChild(timer1);
    timeHeader.appendChild(timer2);
    timeHistoryContainer.appendChild(timeHeader);

    return timeHistoryContainer;
}

module.exports = timeHistoryContainer;
function timeHistoryContainer () {

    const timeHistoryContainer = document.createElement("div");
    timeHistoryContainer.className = "time-history-container";

    const timeHeader = document.createElement("div");
    timeHeader.className = "time-div";
    const gameTime = document.createElement("h4");
    gameTime.innerHTML = "CZAS GRY";
    timeHeader.appendChild(gameTime);

    const timer1 = document.createElement("div");
    timer1.id = "timer1";
    const timerWhite = document.createElement("div");
    timerWhite.id = "timer-white";
    const white = document.createElement("h5");
    white.innerHTML = "BIAŁE";
    timer1.appendChild(white);
    timer1.appendChild(timerWhite);

    
    const timer2 = document.createElement("div");
    timer2.id = "timer2";
    const timerBlack = document.createElement("div");
    timerBlack.id = "timer-black";
    const black = document.createElement("h5");
    black.innerHTML = "CZARNE";
    timer2.appendChild(black);
    timer2.appendChild(timerBlack);

    timeHeader.appendChild(timer1);
    timeHeader.appendChild(timer2);
    timeHistoryContainer.appendChild(timeHeader);

    return timeHistoryContainer;
}

module.exports = timeHistoryContainer;
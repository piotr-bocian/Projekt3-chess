class timeHistory {
    timeHistoryContainer () {

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

        // HISTORY CONTAINER

        const historyContainer = document.createElement("div");
        historyContainer.className = "history-div";

        const historyHeader = document.createElement("h4");
        historyHeader.innerHTML = "HISTORIA GRY";
        historyContainer.appendChild(historyHeader);

        const historyBody = document.createElement("div");
        historyBody.className = "history-div-body";
        historyContainer.appendChild(historyBody);

        timeHistoryContainer.appendChild(historyContainer);

        // BUTTONS
        const buttonContainer = document.createElement("div");
        buttonContainer.className = "button-div";

        const exitButton = document.createElement("p");
        exitButton.className = "exit-button"
        exitButton.innerHTML = "WYJDŹ Z GRY";

        const undoButton = document.createElement("p");
        undoButton.className = "undo-button"
        undoButton.innerHTML = "COFNIJ RUCH";
        if(document.documentElement.lang === 'en'){
            gameTime.innerHTML = "GAME TIME";
            white.innerHTML = "WHITE";
            black.innerHTML = "BLACK";
            historyHeader.innerHTML = "CHESS MOVES";
            exitButton.innerHTML = "LEAVE GAME";
            undoButton.innerHTML = "REVERSE LAST MOVE";
        }

        buttonContainer.appendChild(exitButton);
        buttonContainer.appendChild(undoButton);

        timeHistoryContainer.appendChild(buttonContainer);
        document.querySelector('body')!.appendChild(timeHistoryContainer);
        return timeHistoryContainer;
    }
}

export {timeHistory};
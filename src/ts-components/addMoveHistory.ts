function addMoveHistory(history: string[]) {
    const timeHistoryContainer = document.getElementsByClassName("history-div-body")[0]!;

    const moveHeader = document.createElement("div");
    moveHeader.className = "history-moveHeader";
    moveHeader.innerHTML = "BIAŁE";

    const move = document.createElement("div");
    move.className = "history-move";
    move.innerHTML = history[history.length - 1]!;

    timeHistoryContainer.appendChild(moveHeader);
    timeHistoryContainer.appendChild(move);

    return timeHistoryContainer;
}

module.exports = addMoveHistory;
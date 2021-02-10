
function addMoveHistory(history: string, color:string) {
    const timeHistoryContainer = document.getElementsByClassName("history-div-body")[0]!;

    const moveHeader = document.createElement("div");
    moveHeader.className = "history-moveHeader";
    moveHeader.innerHTML = color;

    const move = document.createElement("div");
    move.className = "history-move";
    move.innerHTML = history;

    timeHistoryContainer.appendChild(moveHeader);
    timeHistoryContainer.appendChild(move);
    timeHistoryContainer .scrollTop = moveHeader.offsetHeight + moveHeader.offsetTop;
    return timeHistoryContainer;
}

export {addMoveHistory};
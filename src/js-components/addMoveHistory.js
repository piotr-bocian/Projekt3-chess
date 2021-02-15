"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addMoveHistory = void 0;
function addMoveHistory(history, color) {
    const timeHistoryContainer = document.getElementsByClassName("history-div-body")[0];
    const moveHeader = document.createElement("div");
    moveHeader.className = "history-moveHeader";
    moveHeader.innerHTML = color;
    const move = document.createElement("div");
    move.className = "history-move";
    move.innerHTML = history;
    timeHistoryContainer.appendChild(moveHeader);
    timeHistoryContainer.appendChild(move);
    timeHistoryContainer.scrollTop = moveHeader.offsetHeight + moveHeader.offsetTop;
    return timeHistoryContainer;
}
exports.addMoveHistory = addMoveHistory;

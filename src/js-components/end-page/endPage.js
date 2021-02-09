"use strict";

function title() {
    const titleDiv = document.createElement("div");
    titleDiv.className = "menuTitle";
    const title = document.createElement("h1");
    title.innerHTML = "WYNIK GRY";
    titleDiv.appendChild(title);
    return title;
}
function gameResult() {

    const testObj = {
        user1: 'Kamil',
        user2: "Maciek",
        winner: '',
    }
    const nameDiv = document.createElement("div");
    nameDiv.className = "menuNames";
    const title = document.createElement("h2");
    const title2 = document.createElement("h3");
    title.className = "title-result";
    title2.className = "title-result";
    if(testObj.winner === ''){
        console.log('remis')
        title.innerHTML = `PAT`;
        title2.innerHTML = `Gracz ${testObj.user1} zremisował z graczem ${testObj.user2}`
    }
    else{
        title.innerHTML = `SZACH-MAT`;
        title2.innerHTML = `WYGRAŁ GRACZ ${testObj.winner}`
    }
    const inputDiv = document.createElement("div");
    nameDiv.appendChild(title);
    nameDiv.appendChild(title2);
    nameDiv.appendChild(inputDiv);
    return nameDiv;
}

function startButton() {
    const startButtonContainer = document.createElement("div");
    startButtonContainer.className = "start-button";
    const startButtonText = document.createElement("p");
    startButtonText.innerHTML = "ROZPOCZNIJ GRĘ!";
    startButtonContainer.appendChild(startButtonText);
    return startButtonContainer;
}
function endPage() {
    const menu = document.createElement("div");
    menu.className = "menuContainer";
    menu.appendChild(title());
    menu.appendChild(gameResult());
    menu.appendChild(startButton());
    return menu;
}
module.exports = endPage;



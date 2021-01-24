"use strict";
function title() {
    const titleDiv = document.createElement("div");
    titleDiv.className = "menuTitle";
    const title = document.createElement("h1");
    title.innerHTML = "USTAWIENIA GRY";
    titleDiv.appendChild(title);
    return title;
}
function menuNames() {
    const nameDiv = document.createElement("div");
    nameDiv.className = "menuNames";
    const title = document.createElement("h2");
    title.innerHTML = "IMIONA GRACZY";
    const inputDiv = document.createElement("div");
    const player1 = document.createElement("input");
    player1.type = "text";
    player1.minLength = 2;
    player1.maxLength = 20;
    player1.id = "player1-input";
    player1.required = true;
    const player2 = document.createElement("input");
    player2.type = "text";
    player2.minLength = 2;
    player2.maxLength = 20;
    player2.id = "player2-input";
    player2.required = true;
    inputDiv.appendChild(player1);
    inputDiv.appendChild(player2);
    nameDiv.appendChild(title);
    nameDiv.appendChild(inputDiv);
    return nameDiv;
}
function time() {
    const timeDiv = document.createElement("div");
    timeDiv.className = "menuTime";
    const title = document.createElement("h2");
    title.innerHTML = "CZAS GRY [W MINUTACH]";
    const range = document.createElement("input");
    range.type = "range";
    range.className = "range";
    range.min = "60";
    range.max = "180";
    timeDiv.appendChild(title);
    timeDiv.appendChild(range);
    return timeDiv;
}
function patCheckList() {
    const titleDiv = document.createElement("div");
    titleDiv.className = "menuCheckList";
    const title = document.createElement("h1");
    title.innerHTML = "PAT JAKO WYGRANA";
    const input1 = document.createElement("input");
    input1.type = "checkbox";
    input1.id = "pat1";
    input1.name = "pat1";
    const label1 = document.createElement("label");
    label1.innerHTML = "PATUJĄCEGO";
    const input2 = document.createElement("input");
    input2.type = "checkbox";
    input2.id = "pat2";
    input2.name = "pat2";
    const label2 = document.createElement("label");
    label2.innerHTML = "PATOWANEGO";
    titleDiv.appendChild(title);
    titleDiv.appendChild(input1);
    titleDiv.appendChild(label1);
    titleDiv.appendChild(input2);
    titleDiv.appendChild(label2);
    return titleDiv;
}
function menuContainer() {
    const menu = document.createElement("div");
    menu.className = "menuContainer";
    menu.appendChild(title());
    menu.appendChild(menuNames());
    menu.appendChild(time());
    menu.appendChild(patCheckList());
    return menu;
}
module.exports = menuContainer;
// document.body.appendChild(menuContainer());

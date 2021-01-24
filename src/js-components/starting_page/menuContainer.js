"use strict";
function title() {
    const titleDiv = document.createElement("div");
    titleDiv.className = "menuTitle";
    const title = document.createElement("h2");
    title.innerHTML = "USTAWIENIA GRY";
    titleDiv.appendChild(title);
    return title;
}
function menuNames() {
    const nameDiv = document.createElement("div");
    nameDiv.className = "menuNames";
    const title = document.createElement("h4");
    title.innerHTML = "IMIONA GRACZY";
    const inputDiv = document.createElement("div");
    const field1 = document.createElement("fieldset");
    const legend1 = document.createElement("legend");
    legend1.innerHTML = "Białe | nazwa gracza";
    const player1 = document.createElement("input");
    player1.type = "text";
    player1.minLength = 2;
    player1.maxLength = 20;
    player1.id = "player1-input";
    player1.required = true;
    player1.placeholder = "Brajan";
    field1.appendChild(legend1);
    field1.appendChild(player1);
    const field2 = document.createElement("fieldset");
    const legend2 = document.createElement("legend");
    legend2.innerHTML = "Czarne | nazwa gracza";
    const player2 = document.createElement("input");
    player2.type = "text";
    player2.minLength = 2;
    player2.maxLength = 20;
    player2.id = "player2-input";
    player2.required = true;
    player2.placeholder = "Jessica";
    field2.appendChild(legend2);
    field2.appendChild(player2);
    inputDiv.appendChild(field1);
    inputDiv.appendChild(field2);
    nameDiv.appendChild(title);
    nameDiv.appendChild(inputDiv);
    return nameDiv;
}
function time() {
    const timeDiv = document.createElement("div");
    timeDiv.className = "menuTime";
    const title = document.createElement("h4");
    title.innerHTML = "CZAS GRY";
    const inMinutes = document.createElement("span");
    inMinutes.innerHTML = "[W MINUTACH]";
    title.appendChild(inMinutes);
    const rangeSlider = document.createElement("div");
    rangeSlider.className = "range-slider";
    const span = document.createElement("span");
    span.className = "rs-label";
    const range = document.createElement("input");
    range.type = "range";
    range.className = "rs-range";
    range.value = "60";
    range.min = "60";
    range.max = "180";
    rangeSlider.addEventListener("input", showSliderValue, false);
    function showSliderValue() {
        span.innerHTML = range.value;
    }
    rangeSlider.appendChild(range);
    rangeSlider.appendChild(span);
    timeDiv.appendChild(title);
    timeDiv.appendChild(rangeSlider);
    return timeDiv;
}
function patCheckList() {
    const titleDiv = document.createElement("div");
    titleDiv.className = "menuCheckList";
    const title = document.createElement("h4");
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

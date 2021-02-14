

function title(): HTMLDivElement {

    const titleDiv : HTMLDivElement = document.createElement("div");
    titleDiv.className = "menuTitle";

    const title : HTMLHeadingElement = document.createElement("h2");
    title.innerHTML = "USTAWIENIA GRY";

    titleDiv.appendChild(title);

    return title;
}

function menuNames(): HTMLDivElement {

    const nameDiv : HTMLDivElement = document.createElement("div");
    nameDiv.className = "menuNames";

    const title : HTMLHeadingElement = document.createElement("h4");
    title.innerHTML = "IMIONA GRACZY";

    const inputDiv : HTMLDivElement = document.createElement("div");

    const field1 = document.createElement("fieldset");
    const legend1 = document.createElement("legend");
    legend1.innerHTML = "Białe | nazwa gracza";
    const player1 : HTMLInputElement = document.createElement("input");
    player1.type = "text";
    player1.minLength = 2;
    player1.maxLength = 20;
    player1.id = "player1-input"
    player1.required = true;
    player1.placeholder = "Brajan";

    field1.appendChild(legend1);
    field1.appendChild(player1);

    const field2 = document.createElement("fieldset");
    const legend2 = document.createElement("legend");
    legend2.innerHTML = "Czarne | nazwa gracza";
    const player2 : HTMLInputElement = document.createElement("input");
    player2.type = "text";
    player2.minLength = 2;
    player2.maxLength = 20;
    player2.id = "player2-input"
    player2.required = true;
    player2.placeholder = "Jessica";

    field2.appendChild(legend2);
    field2.appendChild(player2);

    inputDiv.appendChild(field1);
    inputDiv.appendChild(field2);

    nameDiv.appendChild(title);
    nameDiv.appendChild(inputDiv)


    return nameDiv;
}

function time(): HTMLDivElement {

    const timeDiv : HTMLDivElement = document.createElement("div");
    timeDiv.className = "menuTime";

    const title : HTMLHeadingElement = document.createElement("h4");
    title.className = "title-time";
    title.innerHTML = "CZAS GRY";
    const inMinutes : HTMLSpanElement = document.createElement("span");
    inMinutes.innerHTML = "[W MINUTACH]"
    title.appendChild(inMinutes);

    const rangeSlider : HTMLDivElement = document.createElement("div");
    rangeSlider.className = "range-slider";

    const span : HTMLSpanElement = document.createElement("span");
    span.className = "rs-label";
    span.innerHTML = "60";

    const range : HTMLInputElement = document.createElement("input");
    range.type = "range";
    range.className = "rs-range";
    range.min = "60";
    range.max = "180";
    range.step = "10";


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

function patCheckList(): HTMLDivElement {

    const titleDiv : HTMLDivElement = document.createElement("div");
    titleDiv.className = "menuCheckList";

    const title : HTMLHeadingElement = document.createElement("h4");
    title.innerHTML = "PAT JAKO WYGRANA";

    const label1 = document.createElement("label");
    const input1 = document.createElement("input");
    input1.type = "radio";
    input1.id = "pat1";
    input1.name = "pat";
    input1.checked = true;
    const inputSpan1 = document.createElement("span");
    inputSpan1.innerHTML = "PATUJĄCEGO";
    label1.appendChild(input1);
    label1.appendChild(inputSpan1);

    const label2 = document.createElement("label");
    const input2 = document.createElement("input");
    input2.type = "radio";
    input2.id = "pat2";
    input2.name = "pat";
    const inputSpan2 = document.createElement("span");
    inputSpan2.innerHTML = "PATOWANEGO";
    label2.appendChild(input2);
    label2.appendChild(inputSpan2);

    titleDiv.appendChild(title);
    titleDiv.appendChild(label1);
    titleDiv.appendChild(label2);

    return titleDiv;
}

function startButton(): HTMLDivElement {

    const startButtonContainer = document.createElement("div");
    startButtonContainer.className = "start-button";

    const startButtonText = document.createElement("p");
    startButtonText.innerHTML = "ROZPOCZNIJ GRĘ!";

    startButtonContainer.appendChild(startButtonText);

    return startButtonContainer
}

function menuContainer(): HTMLDivElement {

    const menu : HTMLDivElement = document.createElement("div");
    menu.className = "menuContainer";

    menu.appendChild(title());
    menu.appendChild(menuNames());
    menu.appendChild(time());
    menu.appendChild(patCheckList());
    menu.appendChild(startButton());

    return menu;
}

module.exports = menuContainer;

// document.body.appendChild(menuContainer());
function title(): HTMLDivElement {

    const titleDiv : HTMLDivElement = document.createElement("div");
    titleDiv.className = "menuTitle";

    const title : HTMLHeadingElement = document.createElement("h1");
    title.innerHTML = "USTAWIENIA GRY";

    titleDiv.appendChild(title);
  
    return title;
}

function menuNames(): HTMLDivElement {

    const nameDiv : HTMLDivElement = document.createElement("div");
    nameDiv.className = "menuNames";

    const title : HTMLHeadingElement = document.createElement("h2");
    title.innerHTML = "IMIONA GRACZY";

    const inputDiv : HTMLDivElement = document.createElement("div");
    const player1 : HTMLInputElement = document.createElement("input");
    player1.type = "text";
    player1.minLength = 2;
    player1.maxLength = 20;
    player1.id = "player1-input"
    player1.required = true;
    const player2 : HTMLInputElement = document.createElement("input");
    player2.type = "text";
    player2.minLength = 2;
    player2.maxLength = 20;
    player2.id = "player2-input"
    player2.required = true;

    inputDiv.appendChild(player1);
    inputDiv.appendChild(player2);

    nameDiv.appendChild(title);
    nameDiv.appendChild(inputDiv)

  
    return nameDiv;
}

function time(): HTMLDivElement {

    const timeDiv : HTMLDivElement = document.createElement("div");
    timeDiv.className = "menuTime";

    const title : HTMLHeadingElement = document.createElement("h2");
    title.innerHTML = "CZAS GRY [W MINUTACH]";

    const range : HTMLInputElement = document.createElement("input");
    range.type = "range";
    range.className = "range";
    range.min = "60";
    range.max = "180";

    timeDiv.appendChild(title);
    timeDiv.appendChild(range);

    return timeDiv;
}


function menuContainer(): HTMLDivElement {

    const menu : HTMLDivElement = document.createElement("div");
    menu.className = "menuContainer";

    menu.appendChild(title());
    menu.appendChild(menuNames());
    menu.appendChild(time());
  
    return menu;
}

module.exports = menuContainer;

// document.body.appendChild(menuContainer());
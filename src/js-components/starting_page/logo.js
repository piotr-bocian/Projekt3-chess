"use strict";
function logo() {
    const divLogo = document.createElement("div");
    divLogo.className = "logo";
    const imgLogo = document.createElement("img");
    const src = "../../../../Projekt3-chess/static/assets/CodersChess.png";
    imgLogo.setAttribute('src', src);
    imgLogo.addEventListener("click", function () {
        location.reload();
    });
    divLogo.appendChild(imgLogo);
    return divLogo;
}
module.exports = logo;

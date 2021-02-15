"use strict";
function lang() {
    const divLang = document.createElement("div");
    divLang.className = "lang";
    const imgEng = document.createElement("img");
    const srcEng = "../../../../Projekt3-chess/static/assets/eng.png";
    imgEng.setAttribute('src', srcEng);
    imgEng.className = "eng";
    const imgPl = document.createElement("img");
    const srcPl = "../../../../Projekt3-chess/static/assets/pl.png";
    imgPl.setAttribute('src', srcPl);
    imgPl.className = "pl";
    divLang.appendChild(imgEng);
    divLang.appendChild(imgPl);
    return divLang;
}
module.exports = lang;

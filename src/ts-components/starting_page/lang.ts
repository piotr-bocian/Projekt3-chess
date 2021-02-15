function lang(): HTMLDivElement {

    const divLang : HTMLDivElement = document.createElement("div");
    divLang.className = "lang";
    
    const imgEng : HTMLImageElement = document.createElement("img");
    const srcEng = "../../../static/assets/eng.png";
    imgEng.setAttribute('src', srcEng);
    imgEng.className = "eng";

    const imgPl : HTMLImageElement = document.createElement("img");
    const srcPl = "../../../static/assets/pl.png";
    imgPl.setAttribute('src', srcPl);
    imgPl.className = "pl";

    divLang.appendChild(imgEng);
    divLang.appendChild(imgPl);

    return divLang;
}

module.exports = lang;

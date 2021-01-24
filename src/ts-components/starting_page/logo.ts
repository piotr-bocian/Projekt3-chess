function logo(): HTMLDivElement {

    const divLogo : HTMLDivElement = document.createElement("div");
    divLogo.className = "logo";
  
    const imgLogo : HTMLImageElement = document.createElement("img");
    const src = "../../../static/assets/CodersChess.png";
    imgLogo.setAttribute('src', src);
   
    imgLogo.addEventListener("click", function() : void {
        location.reload();
    });
    
    divLogo.appendChild(imgLogo)

    return divLogo;
}

module.exports = logo;



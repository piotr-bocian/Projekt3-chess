class endResult {
    winer: string;
    how: string;
    boardWrapper:any;
    timeHistoryContainer:any;
    bodyContainer:any;
    logoElement:any;
    menuContainer:any;

    constructor (winer: string, how: string) {
        this.winer = winer;
        this.how = how;
        this.boardWrapper = document.querySelector('.board-wrapper');
        this.timeHistoryContainer = document.querySelector('.time-history-container');
        this.bodyContainer = document.getElementsByTagName('body');
        this.logoElement = document.querySelector('.logo');
        this.menuContainer = document.querySelector('.menuContainer');
    }

    showResult(){
        this.logoElement.classList.remove('display-none');
        this.bodyContainer[0].classList.add('body-start-page');
        this.timeHistoryContainer.remove();
        this.boardWrapper.remove();

        const testObj = {
            user1: "Kamil",
            user2: "Maciek",
            winner: this.winer,
            how: this.how
        }
        function title() {
            const titleDiv = document.createElement("div");
            titleDiv.className = "menuTitle";
            const title = document.createElement("h1");
            title.innerHTML = "KONIEC GRY";
            titleDiv.appendChild(title);
            return title;
        }
        function gameResult() {
            const nameDiv = document.createElement("div");
            nameDiv.className = "menuNames";
            const title = document.createElement("h2");
            const title2 = document.createElement("h3");
            title.className = "title-result";
            title2.className = "title-result";
            if (testObj.how === 'pat') {
                title.innerHTML = `PAT (REMIS)`;
                title2.innerHTML = `Gracz ${testObj.user1} zremisował z graczem ${testObj.user2}`;
            }
            else if (testObj.how == 'czas') {
                title2.innerHTML = `Koniec Czasu Przeciwnika`;
                title.innerHTML = `Wygrał gracz ${testObj.winner}`;
            }
            else {
                title.innerHTML = `Wygrał gracz ${testObj.winner}`;
                title2.innerHTML = `SZACH-MAT`;
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

        function menuContainer(): HTMLDivElement {

            const menu : HTMLDivElement = document.createElement("div");
            menu.className = "menuContainer";
            menu.appendChild(title());
            menu.appendChild(gameResult());
            menu.appendChild(startButton());
            return menu;
        }
    document.body.appendChild(menuContainer());
    
    };
}
module.exports = endResult;
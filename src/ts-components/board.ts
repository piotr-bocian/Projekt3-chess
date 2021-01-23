enum ID {
    A = 1,B,C,D,E,F,G,H
}

class Board{

    drawBoard(){
        const boardContainer = document.createElement('div');
        boardContainer.classList.add('board-container');

        for(let i=8; i>0; i--){
            for(let j=1; j<9; j++){
                const div = document.createElement('div');
                div.id = `${ID[j]}-${i}`; //<-- ważne żeby każdą komórkę na planszy dało się zidentyfikować za pomocą dwóch współrzędnych
                if(i%2 === 0)
                    div.classList.add(`${j%2 === 0 ? 'dark' : 'light'}`);
                else
                    div.classList.add(`${j%2 === 0 ? 'light' : 'dark'}`);
                boardContainer.appendChild(div);
            }
        }

        document.querySelector('body')!.appendChild(boardContainer);
    }
}

export {Board};
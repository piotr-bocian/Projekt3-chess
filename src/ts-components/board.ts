class Board{

    drawBoard(){
        const boardContainer = document.createElement('div');
        boardContainer.classList.add('board-container');

        for(let i=0; i<8; i++){
            for(let j=0; j<8; j++){
                const div = document.createElement('div');
                div.id = `${i}-${j}`; //<-- ważne żeby każdą komórkę na planszy dało się zidentyfikować za pomocą dwóch współrzędnych
                if(i%2 === 0)
                    div.classList.add(`${j%2 === 0 ? 'light' : 'dark'}`);
                else
                    div.classList.add(`${j%2 === 0 ? 'dark' : 'light'}`);    
                boardContainer.appendChild(div);
            }
        }

        document.querySelector('body')!.appendChild(boardContainer);
    }
}

export {Board};
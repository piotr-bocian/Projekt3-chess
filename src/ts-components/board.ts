enum ID {
    A = 1,B,C,D,E,F,G,H
}

class Board{

    drawBoard(){
        const boardWrapper = document.createElement('div');
        boardWrapper.classList.add('board-wrapper');

        const letters= document.createElement('div');
        letters.classList.add('letters');

        const numbers= document.createElement('div');
        numbers.classList.add('numbers');

        const boardContainer = document.createElement('div');
        boardContainer.classList.add('board-container');

        for(let i =1; i<9; i++){
            const div = document.createElement('div');
            const num = document.createElement('div');
            div.classList.add('notation');
            div.innerText = `${ID[i]}`;
            num.innerText = `${i}`;
            letters.appendChild(div);
            numbers.appendChild(num);
        }

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

        document.querySelector('body')!.appendChild(boardWrapper).appendChild(numbers);
        boardWrapper.appendChild(boardContainer);
        boardWrapper.appendChild(letters);
    }
}

export {Board};
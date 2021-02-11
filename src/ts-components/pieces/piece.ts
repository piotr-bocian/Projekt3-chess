import { Game } from "../game"

import {addMoveHistory} from '../addMoveHistory';
abstract class Piece{
    public color:string;
    protected symbol:string = ''; //<-- domyślnie ustawiłem puste, bo każda figura ma inny symbol
    protected positionX:string;
    protected positionY:number;
    protected possibleMovesIDs:string[];    //<-- tablica ID pól na które może przemieścić się figura
    protected parentSquare:HTMLElement; //<-- div w którym "siedzi" img z obrazkiem danej figury
    public movesHistory: string[][];
    public lastMove: string;
    //zastanawiam się czy nie zrobić tych wszystkich właściwości private...

    constructor(color:string, positionX:string, positionY:number){
        this.color = color;
        this.positionX = positionX;
        this.positionY = positionY;
        this.possibleMovesIDs = this.showPossibleMoves();

        this.parentSquare = document.getElementById(`${this.positionX}-${this.positionY}`)!; //<-- parentSquare przechowuje diva, w którym obecnie znajduje się figura

        this.movesHistory=[];
        this.lastMove ='';
    }

    setOnBoard(pX:string, pY:number):void{ //<-- ta metoda zmienia miejsce na szachownicy w którym wyświetla się figura (ale za zmienienie składowych positionX i positionY odpowiada metoda updatePosition())
        //w pierwszych dwóch linijkach usuwamy figurę z obecnego miejsca, następnie ustawiamy w nowym
        this.parentSquare.innerHTML = "";
        this.parentSquare.classList.remove('pieceInside');
        const img = document.createElement('img');
        img.classList.add('image');
        img.classList.add(`${this.color}`.toLowerCase());
        img.setAttribute('src', this.symbol);
        this.updatePosition(pX, pY);
        this.parentSquare.appendChild(img);
        const imgContainer = img.parentElement !as HTMLElement;
        imgContainer.classList.add('pieceInside');
        Game.changeTurn();
    }

    updatePosition(pX:string, pY:number):void{ //<-- ta metoda aktualizuje stan właściwości positionX i positionY (ale za samo wyświetlenie figury w nowym miejscu odpowiada setOnBoard())
        this.positionX = pX;
        this.positionY = pY;
        this.parentSquare = document.getElementById(`${this.positionX}-${this.positionY}`)!;
    }

    removeClassActive():void{   //<-- ta metoda usuwa klasę 'active' ze wszystkich pól
        let elems = document.querySelectorAll('.active');
        for (var i = 0; i < elems.length; i++) {
            elems[i]!.classList.remove('active');
            if (elems[i]!.classList.contains('en-pass')) {
                elems[i]!.classList.remove('en-pass');
            }
        }
    }
    //HISTORIA RUCHÓW
    history(square:Element){
        const fromPositionX = this.getPositionX();
        const fromPositionY = this.getPositionY().toString();
        const toPositionX = `${(square).id.charAt(0)}`;
        const toPositionY = `${parseInt((square).id.charAt(2))}`;
        this.movesHistory.push([fromPositionX, fromPositionY, toPositionX, toPositionY]);
        // console.log(this.movesHistory);
    }
    //OPIS RUCHÓW
    historyNotation(move = 'moved from', to ='to', name = this.constructor.name){
        const movesHistoryClone = this.movesHistory.slice();
        const createNotation = movesHistoryClone.pop();
        if(typeof createNotation === 'undefined') return;
        if(typeof createNotation[2] === 'undefined') return;
        if(typeof createNotation[0] === 'undefined') return;
        const descriptive = `${name} ${move} ${createNotation[0]}-${createNotation[1]} ${to} ${createNotation[2]}-${createNotation[3]}`;
        // const longAlgebraicNotation = `${name[0]}${createNotation[0].toLowerCase()}${createNotation[1]}-${createNotation[2].toLowerCase()}${createNotation[3]}`;
        this.lastMove = descriptive;
        addMoveHistory(this.lastMove, this.color)
        // this.lastMove = longAlgebraicNotation;
        console.log(this.lastMove);
    }

    //COFANIE RUCHÓW BEZ NASLUCHU WEWNĄTRZ METODY
    reverseMove(){
        const lastMove = this.movesHistory;
            this.removeClassActive();
            if(lastMove.length === 0){return};
            const popLastMove = lastMove.pop();
            console.log(popLastMove);
            // this.movesHistory.length = lastMove.length;
            if (popLastMove){
                    const positionX = popLastMove[0];
                    const positionY = popLastMove[1];
                    if(positionX && positionY){
                        this.setOnBoard(positionX.toUpperCase(), parseInt(positionY));
                    }
                } else {
                    return
                }

    }



    abstract showPossibleMoves():string[];

    abstract move():void;

    getPositionX(){
        return this.positionX;
    }

    getPositionY(){
        return this.positionY;
    }

    getColor(){
        return this.color;
    }
}

export {Piece};
import { Game } from "../game";
import {addMoveHistory} from '../addMoveHistory';
import { getName } from "../translateFunction";
abstract class Piece{
    public color:string;
    protected symbol:string = ''; //<-- domyślnie ustawiłem puste, bo każda figura ma inny symbol
    protected positionX:string;
    protected positionY:number;
    protected possibleMovesIDs:string[];    //<-- tablica ID pól na które może przemieścić się figura
    protected parentSquare:HTMLElement; //<-- div w którym "siedzi" img z obrazkiem danej figury
    protected moves:string[][]
    public lastMove: string;
    public static beated:Piece[] = [];
    public static moveTimeArray: string[];
    public static movesHistory: string[][];

    constructor(color:string, positionX:string, positionY:number){
        this.color = color;
        this.positionX = positionX;
        this.positionY = positionY;
        this.possibleMovesIDs = this.showPossibleMoves();

        this.parentSquare = document.getElementById(`${this.positionX}-${this.positionY}`)!; //<-- parentSquare przechowuje diva, w którym obecnie znajduje się figura
        Piece.moveTimeArray =[];
        Piece.movesHistory=[];
        this.lastMove ='';
        this.moves = [];
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
    // HISTORIA RUCHÓW
    history(square:Element){
        const fromPositionX = this.getPositionX();
        const fromPositionY = this.getPositionY().toString();
        const toPositionX = `${(square).id.charAt(0)}`;
        const toPositionY = `${parseInt((square).id.charAt(2))}`;
        Piece.movesHistory.push([fromPositionX, fromPositionY, toPositionX, toPositionY]);
        this.moves.push([fromPositionX, fromPositionY, toPositionX, toPositionY])
    }
    //OPIS RUCHÓW
    historyNotation(){

        let name:string;
        let movedTo:string;
        let movedFrom:string;
        let timeStampWhite = document.querySelector('#timer-white')?.innerHTML;
        let timeStampBlack = document.querySelector('#timer-black')?.innerHTML;
        const time = Game.round % 2 === 0 ? timeStampWhite : timeStampBlack;
        let beatedPiece = Piece.beated.pop();
        const movesHistoryClone = Piece.movesHistory.slice();
        const createNotation = movesHistoryClone.pop();
        if(typeof createNotation === 'undefined') return;
        if(typeof createNotation[2] === 'undefined') return;
        if(typeof createNotation[0] === 'undefined') return;
        if(!time) return;
        //CZAS WYKONANIA RUCHU
        Piece.moveTimeArray.push(time);

        if (document.documentElement.lang === 'pl'){
            movedFrom = 'poruszył/a się z pola';
            movedTo = 'na pole'
            name = getName(this.constructor.name);

            //PROMOCJA
            // if (Piece.specialMove === 'promocja Piona'){
            //     const descriptive = `${time} ${Piece.specialMove} na .....`;
            //     this.lastMove = descriptive;
            //     }
             //SZACHOWANIE DO SPRAWDZENIA POWINNO DZIAŁAĆ


            //RUCHY
            const descriptive = `${time} ${name} ${movedFrom} ${createNotation[0]}-${createNotation[1]} ${movedTo} ${createNotation[2]}-${createNotation[3]}`;
            this.lastMove = descriptive;

            //NOTACJA DLA BICIA
            if (beatedPiece){
            const descriptive = `${time} ${getName(beatedPiece.color)} ${getName(beatedPiece.constructor.name).toLowerCase()} został zbity przez ${getName(this.color).toLowerCase()} ${name.toLowerCase()}`;
            this.lastMove = descriptive;
            }

            addMoveHistory(this.lastMove, getName(this.color));
            //EN VERSION
        } else if (document.documentElement.lang === 'en'){
            movedFrom = 'moved from';
            movedTo = 'to';
            name = this.constructor.name;
            //RUCHY
             const descriptive = `${time} ${name} ${movedFrom} ${createNotation[0]}-${createNotation[1]} ${movedTo} ${createNotation[2]}-${createNotation[3]}`;
             this.lastMove = descriptive;

            //BICIE
            if (beatedPiece){
            const descriptive = `${time} ${beatedPiece.color.charAt(0).toUpperCase() + beatedPiece.color.slice(1)} ${beatedPiece.constructor.name.toLowerCase()} was beaten by ${this.color.toLowerCase()} ${name.toLowerCase()}`;
            this.lastMove = descriptive;
            }
            addMoveHistory(this.lastMove, this.color);
        }

    }

    //DZIAŁAJĄ SAME RUCHY
    reverseLastMove(){
        // let timeStampWhite = document.querySelector('#timer-white');
        // let timeStampBlack = document.querySelector('#timer-black');
        const lastMove = this.moves;
        if(lastMove.length === 0){return};
            const popLastMove = lastMove.pop();
            this.removeClassActive();
            if (popLastMove){
                    const positionX = popLastMove[0];
                    const positionY = popLastMove[1];
                    if(positionX && positionY){
                        this.setOnBoard(positionX.toUpperCase(), parseInt(positionY));
                    }
                } else {
                    return
                }

            //    //ZBITE BIERKI, WRACAJA TYLKO JAKO IMG => ZOMBIE
            //    const last = Game.beated.pop();
            //    const pos = last?.parentSquare.id;
            //    if(!last || !pos)return;
            // //    const name = last?.constructor.name;
            // //    const color = last?.color;
            //    console.log(last)
            //    const black = Game.getBlacks();
            //    const white = Game.getWhites();

            // // TIMER CHYBA DZIAŁA
            // if(Piece.moveTimeArray.length % 2 === 1){
            //     last.updatePosition(pos[0]!, parseInt(pos[2]!));
            //     white.push(last)
            //     // this.whitePlayerTimer.setTimer(Piece.moveTimeArray.pop());
            // //     timeStampWhite.innerHTML = Piece.moveTimeArray.pop()
            // } else {
            //     black.push(last)
            //     // this.blackPlayerTimer.setTimer(Piece.moveTimeArray.pop());
            // //     timeStampBlack.innerHTML = Piece.moveTimeArray.pop()
            // }
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

    defendKing(possibleMoves:string[]){
        const initialX = this.positionX;
        const initialY = this.positionY;
        const king = this.color === 'white' ? Game.getWhiteKing() : Game.getBlackKing();
        const defendingIDs:string[] = [];

        possibleMoves.forEach(move => {
            const posX:string = move.charAt(0);
            const posY:number = parseFloat(move.charAt(2));

            if(document.querySelector(`#${move}`)!.innerHTML === ''){
                this.setOnBoard(posX, posY);
                Game.changeTurn();
                if(!king.isChecked())
                    defendingIDs.push(move);
            }
            else{
                    let originalPiece:Piece;

                    if(this.color === 'white'){
                        for(let p of Game.getBlacks()){
                            if(p.getPositionX() === posX && p.getPositionY() === posY){
                                originalPiece = p;
                                break;
                            }
                        }
                    }
                    else{
                        for(let p of Game.getWhites()){
                            if(p.getPositionX() === posX && p.getPositionY() === posY){
                                originalPiece = p;
                                break;
                            }
                        }
                    }
                    if(king.isChecked()){
                        if(king.isKingCheckedByThisPiece(originalPiece!)){
                            console.log(123);
                            defendingIDs.push(`${originalPiece!.getPositionX()}-${originalPiece!.getPositionY()}`);
                        }
                    }
                    else{
                        defendingIDs.push(`${originalPiece!.getPositionX()}-${originalPiece!.getPositionY()}`);
                    }

                }
        });

        this.setOnBoard(initialX, initialY);
        Game.changeTurn();

        return defendingIDs;
    }
}
export {Piece};
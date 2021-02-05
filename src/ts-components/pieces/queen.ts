import { ID } from "../board";
import { MovesShow, QueenMethods} from "../interfaces/pieceMethodsInterfaces";
import {Piece} from "./piece";
//królowa / hetman
class Queen extends Piece implements QueenMethods{
    constructor(color:string, positionX:string, positionY:number, private movesHistory: string[], private lastMove: string){
        super(color, positionX, positionY);
        // this.symbol = `../../../static/assets/${this.color}Queen.png`;
        this.symbol = `../../../../Projekt3-chess/static/assets/whiteQueen.png`;
        this.setOnBoard(this.positionX, this.positionY);
        //tutaj trzymamy historię;
        this.movesHistory=[];
        this.lastMove
    }

    showPossibleMoves(){

        const allPossibleMoves:string[] = [];
         this.collectAllPossibleMoves().forEach(id=>{
             allPossibleMoves.push(id);
            })
            return allPossibleMoves
    }

    move(){
         //TESTOWO WYWOLUJE TUTAJ
         this.reverseMove()
         ////
        const movesShow:MovesShow =(id)=>{
            const movesPossibilities = [...document.querySelectorAll(`#${id}`)];
                movesPossibilities.forEach(el=>{
                        el.classList.add('active');
                })
         }
         //dodaje klase active na legalne ruchy
         this.showPossibleMoves().forEach(id=>{
            movesShow(id)
         })

        const squares = [...document.querySelectorAll('.board-container div')];
        squares.forEach(square => {
            square.addEventListener('click', () => {
                if(!(square).classList.contains('pieceInside') && (square).classList.contains('active')){
                    this.history(square)
                    this.setOnBoard((square).id.charAt(0), parseInt((square).id.charAt(2)));
                    this.removeClassActive();
                }
            });
        });
    }

    //historia ruchów
    history(square:Element){

        const fromPositionX = this.getPositionX().toLowerCase();
        const fromPositionY = this.getPositionY().toString();
        //długa notacja algebraiczna dla piona
        // if (this.constructor.name === 'Pawn'){
        //     const actualMove = `${fromPositionX}${fromPositionY}-${(square).id.charAt(0).toLowerCase()}${parseInt((square).id.charAt(2))}`;
        //     this.movesHistory.push(actualMove)
        // }
        // const constructorName = this.constructor.name === 'Knight' ? this.constructor.name[1]?.toUpperCase() : this.constructor.name[0]?.toUpperCase();

        //długa notacja algebraiczna
        // const actualMove = `${constructorName}${fromPositionX}${fromPositionY}-${(square).id.charAt(0).toLowerCase()}${parseInt((square).id.charAt(2))}`;
        // this.movesHistory.push(actualMove)
        ///////////////////////////////////////////////////////////
        const opisowo = `${this.color} ${this.constructor.name} moved from ${fromPositionX}-${fromPositionY} to ${(square).id.charAt(0).toLowerCase()}-${parseInt((square).id.charAt(2))}`;
        // this.movesHistory.push(opisowo);
        this.lastMove = opisowo;

        // console.log(this.movesHistory);
        console.log(this.lastMove);
    }


    // prototyp cofania ruchów
    reverseMove(){
        //tablica ce wszystkimi ruchami pozostaje, działamy na kopii

        const lastMove= this.movesHistory.slice();

        //ponieważ usuwamy coś z tablicy mamy unie string|undefined, tworzymny więc type guard by wyeliminować undefined
            document.querySelector('.btn')?.addEventListener('click', ()=>{
            if(lastMove.length === 0){return};
            const popLasMove = lastMove.pop();
            this.movesHistory.length = lastMove.length;
            if (popLasMove){
                console.log(lastMove.length);
                    const positionX = popLasMove[4];
                    const positionY = popLasMove[5];
                    if(positionX && positionY){
                        this.setOnBoard(positionX.toUpperCase(), parseInt(positionY))
                    }
                } else {
                    return
                }
            })
    }

collectAllPossibleMoves(){
    const coordinateX : number = Object.values(ID).indexOf(this.positionX) + 1;
    const moves:string[]=[];

    const moveUp=()=>{
    for(let i=this.positionY +1; i<9; i++){
        const doc = document.getElementById(`${this.positionX}-${i}`)!;
        const checker = doc.classList.contains('pieceInside')
        const colorCheck = doc.querySelector('img')?.classList.contains(`${this.color}`);
    if (checker) {
        if(!colorCheck){
                moves.push(`${this.positionX}-${i}`);
                return
            }
    } else {
               moves.push(`${this.positionX}-${i}`)
            }
}
}
    const moveDown = ()=>{
        for(let j=this.positionY - 1; j>0; j--){
            const doc = document.getElementById(`${this.positionX}-${j}`)!;
        const checker = doc.classList.contains('pieceInside')
        const colorCheck = doc.querySelector('img')?.classList.contains(`${this.color}`);
    if (checker) {
        if(!colorCheck){
                moves.push(`${this.positionX}-${j}`);
                return
            }
    } else {
               moves.push(`${this.positionX}-${j}`)
            }
        }
    }
    const moveRight=()=>{
        for(let i=coordinateX +1; i<9; i++){
            const doc = document.getElementById(`${ID[i]}-${this.positionY}`)!;
        const checker = doc.classList.contains('pieceInside')
        const colorCheck = doc.querySelector('img')?.classList.contains(`${this.color}`);
    if (checker) {
        if(!colorCheck){
            moves.push(`${ID[i]}-${this.positionY}`)
                return
            }
    } else {
        moves.push(`${ID[i]}-${this.positionY}`)
            }
    }
    }
    const moveLeft=()=>{
                for(let i=coordinateX -1; i>0; i--){
                    const doc = document.getElementById(`${ID[i]}-${this.positionY}`)!;
        const checker = doc.classList.contains('pieceInside')
        const colorCheck = doc.querySelector('img')?.classList.contains(`${this.color}`);
    if (checker) {
        if(!colorCheck){
            moves.push(`${ID[i]}-${this.positionY}`)
                return
            }
    } else {
        moves.push(`${ID[i]}-${this.positionY}`)
            }
            }
            }

const diagonalMoves=()=>{

        // top right
        if (9 - coordinateX < 9 - this.positionY) {
            for(let i=1; i<9 - coordinateX; i++){
                const doc = document.getElementById(`${ID[coordinateX+i]}-${this.positionY+i}`)!;
                const checker = doc.classList.contains('pieceInside');
                const colorCheck = doc.querySelector("img")?.classList.contains(`${this.color}`);
                if (checker) {
                    if(!colorCheck){
                        moves.push(`${ID[coordinateX+i]}-${this.positionY+i}`);
                    }
                    break;
                } else {
                    moves.push(`${ID[coordinateX+i]}-${this.positionY+i}`);
                }
            }
        } else {
            for(let i=1; i < 9 - this.positionY; i++){
                const doc = document.getElementById(`${ID[coordinateX+i]}-${this.positionY+i}`)!;
                const checker = doc.classList.contains('pieceInside');
                const colorCheck = doc.querySelector("img")?.classList.contains(`${this.color}`);
                if (checker) {
                    if(!colorCheck){
                        moves.push(`${ID[coordinateX+i]}-${this.positionY+i}`);
                    }
                    break;
                } else {
                    moves.push(`${ID[coordinateX+i]}-${this.positionY+i}`);
                }
            }
        }

        // down left
        if (this.positionY - 1 < coordinateX - 1) {
            for(let i=1 ; i < this.positionY; i++){
                const doc = document.getElementById(`${ID[coordinateX-i]}-${this.positionY-i}`)!;
                const checker = doc.classList.contains('pieceInside');
                const colorCheck = doc.querySelector("img")?.classList.contains(`${this.color}`);
                if (checker) {
                    if(!colorCheck){
                        moves.push(`${ID[coordinateX - i]}-${this.positionY - i}`);
                    }
                    break;
                } else {
                    moves.push(`${ID[coordinateX - i]}-${this.positionY - i}`);
                }
            }
        } else {
            for(let i=1 ; i < coordinateX; i++){
                const doc = document.getElementById(`${ID[coordinateX-i]}-${this.positionY-i}`)!;
                const checker = doc.classList.contains('pieceInside');
                const colorCheck = doc.querySelector("img")?.classList.contains(`${this.color}`);
                if (checker) {
                    if(!colorCheck){
                        moves.push(`${ID[coordinateX - i]}-${this.positionY - i}`);
                    }
                    break;
                } else {
                    moves.push(`${ID[coordinateX - i]}-${this.positionY - i}`);
                }
            }
        }

        // top left
        if (coordinateX < 9 - this.positionY) {
            for(let i = 1; i < coordinateX; i++){
                const doc = document.getElementById(`${ID[coordinateX-i]}-${this.positionY+i}`)!;
                const checker = doc.classList.contains('pieceInside');
                const colorCheck = doc.querySelector("img")?.classList.contains(`${this.color}`);
                if (checker) {
                    if(!colorCheck){
                        moves.push(`${ID[coordinateX-i]}-${this.positionY+i}`);
                    }
                    break;
                } else {
                    moves.push(`${ID[coordinateX-i]}-${this.positionY+i}`);
                }
            }
        } else {
            for(let i = 1 ; i < 9 - this.positionY; i++) {
                const doc = document.getElementById(`${ID[coordinateX-i]}-${this.positionY + i}`)!;
                const checker = doc.classList.contains('pieceInside');
                const colorCheck = doc.querySelector("img")?.classList.contains(`${this.color}`);
                if (checker) {
                    if(!colorCheck){
                        moves.push(`${ID[coordinateX - i]}-${this.positionY + i}`);
                    }
                    break;
                } else {
                    moves.push(`${ID[coordinateX - i]}-${this.positionY + i}`);
                }
            }
        }

        // down right
        if (this.positionY < 9 - coordinateX) {
            for(let i = 1 ; i < this.positionY ; i++){
                const doc = document.getElementById(`${ID[coordinateX+i]}-${this.positionY-i}`)!;
                const checker = doc.classList.contains('pieceInside');
                const colorCheck = doc.querySelector("img")?.classList.contains(`${this.color}`);
                if (checker) {
                    if(!colorCheck){
                        moves.push(`${ID[coordinateX + i]}-${this.positionY - i}`);
                    }
                    break;
                } else {
                    moves.push(`${ID[coordinateX + i]}-${this.positionY - i}`);
                }
            }
        } else {
            for(let i=1; i < 9 - coordinateX; i++) {
                const doc = document.getElementById(`${ID[coordinateX+i]}-${this.positionY-i}`)!;
                const checker = doc.classList.contains('pieceInside');
                const colorCheck = doc.querySelector("img")?.classList.contains(`${this.color}`);
                if (checker) {
                    if(!colorCheck){
                        moves.push(`${ID[coordinateX + i]}-${this.positionY - i}`);
                    }
                    break;
                } else {
                    moves.push(`${ID[coordinateX + i]}-${this.positionY - i}`);
                }
            }
        }
    }

    diagonalMoves()
    moveUp()
    moveDown()
    moveLeft()
    moveRight()
    return moves;
}

    removeClassActive(){
    let elems= [...document.querySelectorAll('.active')];
    for (let i = 0; i < elems.length; i++) {
            elems[i]?.classList.remove('active');
    }
}
}

export {Queen};


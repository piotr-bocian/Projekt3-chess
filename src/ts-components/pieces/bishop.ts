import {Piece} from "./piece";
import { ID } from "../board";
import {Game} from "../game";
//goniec / laufer


class Bishop extends Piece{

    constructor(color:string, positionX:string, positionY:number){
        super(color, positionX, positionY);
        this.symbol = `../../../static/assets/${this.color}Bishop.png`;

        this.setOnBoard(this.positionX, this.positionY);
        //let $self = this;
    }

    showPossibleMoves():string[]{
        this.removeClassActive();
        const possibleMoves: string[] = [];
        const coordinateX : number = Object.values(ID).indexOf(this.positionX) + 1;
        const coordinateY : number = this.positionY;

        // move by first diagonal
        // top right
        if (9 - coordinateX < 9 - coordinateY) {
            for(let i=1; i<9 - coordinateX; i++){
                if (document.getElementById(`${ID[coordinateX+i]}-${coordinateY+i}`)!.classList.contains('pieceInside')) {
                    break;
                } else {
                    possibleMoves.push(`${ID[coordinateX+i]}-${coordinateY+i}`);
                }
            }
        } else {
            for(let i=1; i < 9 - coordinateY; i++){
                if (document.getElementById(`${ID[coordinateX+i]}-${coordinateY+i}`)!.classList.contains('pieceInside')) {
                    break;
                } else {
                    possibleMoves.push(`${ID[coordinateX+i]}-${coordinateY+i}`);
                }
            }
        }
        
        // down left
        if (coordinateY - 1 < coordinateX - 1) {
            for(let i=1 ; i < coordinateY; i++){
                if (document.getElementById(`${ID[coordinateX-i]}-${coordinateY-i}`)!.classList.contains('pieceInside')) {
                    break;
                } else {
                    possibleMoves.push(`${ID[coordinateX - i]}-${coordinateY - i}`);
                }
            }
        } else {
            for(let i=1 ; i < coordinateX; i++){
                if (document.getElementById(`${ID[coordinateX-i]}-${coordinateY-i}`)!.classList.contains('pieceInside')) {
                    break;
                } else {
                    possibleMoves.push(`${ID[coordinateX - i]}-${coordinateY - i}`);
                }
            }
        }

        // move by second diagonal
        // top left
        if (coordinateX < 9 - coordinateY) {
            for(let i = 1; i < coordinateX; i++){
                if (document.getElementById(`${ID[coordinateX-i]}-${coordinateY+i}`)!.classList.contains('pieceInside')) {
                    break;
                } else {
                    possibleMoves.push(`${ID[coordinateX-i]}-${coordinateY+i}`);
                }
            }
        } else {
            for(let i = 1 ; i < 9 - coordinateY; i++) {
                if (document.getElementById(`${ID[coordinateX-i]}-${coordinateY + i}`)!.classList.contains('pieceInside')) {
                    break;
                } else {
                    possibleMoves.push(`${ID[coordinateX - i]}-${coordinateY + i}`);
                }
            }
        }
        
        // down right
        if (coordinateY < 9 - coordinateX) {
            for(let i = 1 ; i < coordinateY ; i++){
                if (document.getElementById(`${ID[coordinateX+i]}-${coordinateY-i}`)!.classList.contains('pieceInside')) {
                    break;
                } else {
                    possibleMoves.push(`${ID[coordinateX + i]}-${coordinateY - i}`);
                }
            }
        } else {
            for(let i=1; i < 9 - coordinateX; i++) {
                if (document.getElementById(`${ID[coordinateX+i]}-${coordinateY-i}`)!.classList.contains('pieceInside')) {
                    break;
                } else {
                    possibleMoves.push(`${ID[coordinateX + i]}-${coordinateY - i}`);
                }
            }
        }

        return possibleMoves;
    }
    
    move():void{
        this.removeClassActive();

        const possibleMovesArr:string[] = this.showPossibleMoves();
        // console.log(possibleMovesArr);
        
        possibleMovesArr.forEach(id => {    //<-- iterujemy przez tablice możliwych ID
            const square = document.querySelector(`#${id}`);
        
            square!.classList.add('active');    //<--oznaczenie wizualne na szachownicy
            square!.addEventListener('click', () => {
                if(square!.classList.contains('active') && (Game.getLastChosen() === this)){
                    this.setOnBoard(square!.id.charAt(0), parseInt(square!.id.charAt(2)));  //<-- przeniesienie figury po kliknięciu
                    this.removeClassActive();
                    Game.checkingKings();
                }
            });

        });
    }

}

export {Bishop};
import { Board } from "./board";
import { Bishop } from "./pieces/bishop";
import { King } from "./pieces/king";
import { Knight } from "./pieces/knight";
import { Piece } from "./pieces/piece";
import { Queen } from "./pieces/queen";
import { Rook } from "./pieces/rook";
import { Pawn } from "./pieces/pawn"
import { ID } from "./board";

class Game {

    private gameBoard:Board;
    private static lastChosen:Piece;

    //private whoNext:string;

    private static whites:Piece[] = [];
    private static blacks:Piece[] = [];

    constructor(){
        this.gameBoard = new Board;
        this.gameBoard.drawBoard();

        Game.whites.push(new Queen('white', `${ID[4]}`, 1));
        Game.whites.push(new King('white', `${ID[5]}`, 1));
        Game.blacks.push(new Queen('black', `${ID[4]}`, 8));
        Game.blacks.push(new King('black', `${ID[5]}`, 8));
        
        for(let i = 3; i <= 6; i+=3) {
            Game.whites.push(new Bishop('white', `${ID[i]}`, 1));
            Game.blacks.push(new Bishop('black', `${ID[i]}`, 8));
        }

        for(let i = 2; i <= 7; i+=5) {
            Game.whites.push(new Knight('white', `${ID[i]}`, 1));
            Game.blacks.push(new Knight('black', `${ID[i]}`, 8));
        }

        for(let i = 1; i <= 8; i+=7) {
            Game.whites.push(new Rook('white', `${ID[i]}`, 1));
            Game.blacks.push(new Rook('black', `${ID[i]}`, 8));
        }

        for(let i = 1; i <= 8; i++) {
           Game.whites.push(new Pawn('white', `${ID[i]}`, 2));
           Game.blacks.push(new Pawn('black', `${ID[i]}`, 7));
        }
    }

    startMove(square:HTMLElement):void{
        
        let chosenPiece = Game.getPiece(square);
        if (chosenPiece) {
            this.setLastChosen(chosenPiece);
            chosenPiece.move();
        }
    }

    static getPiece(square: HTMLElement): Piece | void {
        const x:string = square.id.charAt(0);
        const y:number = parseInt(square.id.charAt(2));
        
        if (square.innerHTML != '' ){
            for(let p of Game.whites){
                if(p.getPositionX() == x && p.getPositionY() == y){
                    return p;
                }
            }
    
            for(let p of Game.blacks){
                if(p.getPositionX() == x && p.getPositionY() == y){
                    return p;
                }
            }  
        } else {
            return;
        }        
    }

    static beat(square: HTMLElement): void {
        const x:string = square.id.charAt(0);
        const y:number = parseInt(square.id.charAt(2));

        let p = Game.getPiece(square);
        if (p) {
            if (p.getColor() === 'white') {
                this.whites.splice(this.whites.indexOf(p),1);
                square.innerHTML = '';
            } else {
                this.blacks.splice(this.blacks.indexOf(p),1);
                square.innerHTML = '';
            }
        } else {
            return;
        }
    }

    setLastChosen(piece:Piece):void{
        Game.lastChosen = piece;
    }

    static getLastChosen():Piece{
        return Game.lastChosen;
    }

    static getPieces(color: string): Piece[] {
        if (color == 'white') {
            return this.whites;
        }
        return this.blacks;
    }
}

export {Game};
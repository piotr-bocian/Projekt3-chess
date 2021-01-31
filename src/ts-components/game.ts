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
    public static lastChosen:Piece;

    //private whoNext:string;

    private whites:Piece[] = [];

    constructor(){
        this.gameBoard = new Board;
        this.gameBoard.drawBoard();

        this.whites.push(new Queen('white', `${ID[4]}`, 1));
        this.whites.push(new King('white', `${ID[5]}`, 1));
        
        // for(let i = 3; i <= 6; i+=3) {
        //     this.whites.push(new Bishop('white', `${ID[i]}`, 1));
        // }

        for(let i = 2; i <= 7; i+=5) {
            this.whites.push(new Knight('white', `${ID[i]}`, 1));
        }

        for(let i = 1; i <= 8; i+=7) {
            this.whites.push(new Rook('white', `${ID[i]}`, 1));
        }

        // for(let i = 1; i <= 8; i++) {
        //    this.whites.push(new Pawn('white', `${ID[i]}`, 2));
        // }
    }

    startMove(square:HTMLElement){
        
        const x:string = square.id.charAt(0);
        const y:number = parseInt(square.id.charAt(2));
        
        for(let p of this.whites){
            if(p.getPositionX() == x && p.getPositionY() == y){
                this.setLastChosen(p);
                p.showPossibleMoves();
            }
        }
    }

    setLastChosen(piece:Piece){
        Game.lastChosen = piece;
    }
}

export {Game};
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
    private static lastChosen:Piece;    //<-- ta składowa klasy Game przechowuje informację o tym jaka figura została wybrana jako ostatnia
    private static whiteKing:King;
    private static blackKing:King;

    private static whites:Piece[] = [];
    private static blacks:Piece[] = [];
    public static beated:Piece[] = [];
//ZBIERANIE HISTORII RYCHÓW BIEREK
    private static allMovesHistory:string[][][];
    private lastMove: string;
    private static currentPlayer = Game.whites;
    private static round:number = 0;

    constructor(){
        this.gameBoard = new Board;
        this.gameBoard.drawBoard();
        //DO SPRAWDZENIA
        this.lastMove = ''
        //

        Game.allMovesHistory = []
        //ustawianie figur
        Game.whiteKing = new King('white', `${ID[5]}`, 1);
        Game.blackKing = new King('black', `${ID[5]}`, 8);

        Game.whites.push(new Queen('white', `${ID[4]}`, 1));
        Game.whites.push(Game.whiteKing);
        Game.blacks.push(new Queen('black', `${ID[4]}`, 8));
        Game.blacks.push(Game.blackKing);
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

    static changeTurn() {
        if (Game.round % 2 === 0) {Game.currentPlayer = Game.blacks};
        if (Game.round % 2 === 1) {Game.currentPlayer = Game.whites};
        this.round++;
      };

    startMove(square:HTMLElement):void{ //<--metoda wywoływana po klknięciu na którekolwiek z pól na szachownicy
        let chosenPiece = Game.getPiece(square);
        if (chosenPiece && !(chosenPiece instanceof Rook) && Game.currentPlayer.includes(chosenPiece)) {
            Game.setLastChosen(chosenPiece);
            chosenPiece.move();
            //TUTAJ ZBIERAM HISTORIE RUCHOW KAŻDEJ BIERKI
            Game.allMovesHistory.push(chosenPiece.movesHistory);
        }
        else{
            if(chosenPiece && !(Game.lastChosen instanceof King) && Game.currentPlayer.includes(chosenPiece)){
                Game.setLastChosen(chosenPiece);
                chosenPiece.move();
                //TUTAJ ZBIERAM HISTORIE RUCHOW KAŻDEJ BIERKI
                Game.allMovesHistory.push(chosenPiece.movesHistory);
                // console.log(this.allMovesHistory);
            }
            else if(chosenPiece && Game.currentPlayer.includes(chosenPiece)){
                Game.setLastChosen(chosenPiece);
                Game.castling();
            }
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
                this.beated.push(p);
                Piece.beated.push(p);
                square.innerHTML = '';
            } else {
                this.blacks.splice(this.blacks.indexOf(p),1);
                this.beated.push(p);
                Piece.beated.push(p);
                square.innerHTML = '';
            }
        } else {
            return;
        }
    }

    static checkingKings():void{ //<-- ta metoda sprawdza czy któryś z królów jest szachowany
        if(Game.whiteKing.isChecked()){
            if(Game.whiteKing.isCheckmated())
                console.log('WHITE KING CHECKMATED');
            else{
                Piece.isChecked = 'Szach na Królu';
                console.log('WHITE KING CHECKED');
            }
        }

        if(Game.blackKing.isChecked()){
            if(Game.blackKing.isCheckmated()){
                console.log('BLACK KING CHECKMATED');
            } else{
                Piece.isChecked = 'Szach na Królu';
                console.log('BLACK KING CHECKED');
            }

        }
    }

    static castling():void{

        if(!this.isCastlingPossible())
            return;

        if(Game.lastChosen.getColor() === 'white'){
            if(Game.lastChosen.getPositionX() === 'A'){
                this.whiteKing.setOnBoard('C', 1);
                Game.lastChosen.setOnBoard('D', 1);
            }
            else{
                this.whiteKing.setOnBoard('G', 1);
                Game.lastChosen.setOnBoard('F', 1);
            }
        }
        else{
            if(Game.lastChosen.getPositionX() === 'A'){
                this.blackKing.setOnBoard('C', 8);
                Game.lastChosen.setOnBoard('D', 8);
            }
            else{
                this.blackKing.setOnBoard('G', 8);
                Game.lastChosen.setOnBoard('F', 8);
            }
        }
    }

    static isCastlingPossible():boolean{
        const color:string = Game.lastChosen.getColor();
        const posX:string = Game.lastChosen.getPositionX();

        if(!(Game.lastChosen as Rook).hasMoved && (color === 'white' ? !this.whiteKing.hasMoved : !this.blackKing.hasMoved)){
            if(posX === 'A'){
                if(color === 'white'){
                    return (
                        document.querySelector('#B-1')!.innerHTML === ''
                        && document.querySelector('#C-1')!.innerHTML === ''
                        && document.querySelector('#D-1')!.innerHTML === ''
                        && this.whiteKing.getDangerZones().indexOf('C-1') === -1
                    );
                }
                else{
                    return (
                        document.querySelector('#B-8')!.innerHTML === ''
                        && document.querySelector('#C-8')!.innerHTML === ''
                        && document.querySelector('#D-8')!.innerHTML === ''
                        && this.blackKing.getDangerZones().indexOf('C-8') === -1
                    );
                }
            }
            if(posX === 'H'){
                if(color === 'white'){
                    return (
                        document.querySelector('#F-1')!.innerHTML === ''
                        && document.querySelector('#G-1')!.innerHTML === ''
                        && this.whiteKing.getDangerZones().indexOf('G-1') === -1
                    )
                }
                else{
                    return (
                        document.querySelector('#F-8')!.innerHTML === ''
                        && document.querySelector('#G-8')!.innerHTML === ''
                        && this.blackKing.getDangerZones().indexOf('G-8') === -1
                    )
                }
            }
        }
        return false;
    }

    //COFANIE RUCHÓW
    reverseMove(){
        for(let p of Game.whites){
                p.reverseMove();
        }
        for(let p of Game.blacks){
            p.reverseMove();
    }
    }



    static getPieces(color: string): Piece[] {
        if (color == 'white') {
            return this.whites;
        }
        return this.blacks;
    }

    static setLastChosen(piece:Piece):void{
        Game.lastChosen = piece;
    }

    static getWhites():Piece[]{
        return Game.whites;
    }

    static getBlacks():Piece[]{
        return Game.blacks;
    }

    static getLastChosen():Piece{
        return Game.lastChosen;
    }

    static getAllMovesHistory(){
        return Game.allMovesHistory;
    }

}

export {Game};
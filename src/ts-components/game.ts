import { Board } from "./board";
import { Bishop } from "./pieces/bishop";
import { King } from "./pieces/king";
import { Knight } from "./pieces/knight";
import { Piece } from "./pieces/piece";
import { Queen } from "./pieces/queen";
import { Rook } from "./pieces/rook";
import { Pawn } from "./pieces/pawn"
import { ID } from "./board";
import { ifPromotion } from "./promotion"
import { Timer } from "./timer";
import { timeHistory } from "./timeHistoryContainer";
import { addMoveHistory } from "./addMoveHistory";
import { endGame } from './endGameCases';

class Game {

    private gameBoard:Board;
    private timeHistory:timeHistory;
    private static lastChosen:Piece;    //<-- ta składowa klasy Game przechowuje informację o tym jaka figura została wybrana jako ostatnia
    private static whiteKing:King;
    private static blackKing:King;

    public static whites:Piece[] = [];
    public static blacks:Piece[] = [];
    public static beated:Piece[] = [];
    private lastMove: string;
    private static currentPlayer = Game.whites;
    public static round:number = 0;
    // Timers:
    public static whitePlayerTimer: Timer;
    public static blackPlayerTimer: Timer;
    // Players:
    public player1Name:string;
    public player2Name:string;
    //bicie
    public static beatCounter: number;
    public static moveCounter: boolean;

    constructor(time:number, player1Name:string, player2Name:string){
        this.gameBoard = new Board;
        this.gameBoard.drawBoard();
        this.timeHistory = new timeHistory;
        this.timeHistory.timeHistoryContainer();
        //DO SPRAWDZENIA
        this.lastMove = ''
        //
        //bicie
        Game.beatCounter = 0;
        //cofanie ruchów
        Game.moveCounter = true;
        // Timers:
        Game.whitePlayerTimer = new Timer(time, 'timer-white');
        Game.blackPlayerTimer = new Timer(time, 'timer-black');
        // Players:
        this.player1Name = player1Name;
        this.player2Name = player2Name;

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

    //TURY
    static changeTurn() {
        if (Game.round % 2 === 0) {
            Game.currentPlayer = Game.blacks;
        };
        if (Game.round % 2 === 1) {
            Game.currentPlayer = Game.whites
        };
        this.round++;
      };

    static changeTimerTurn() {
        if (Game.currentPlayer === Game.blacks) {
            this.blackPlayerTimer.start();
            this.whitePlayerTimer.pause();
          } else {
            this.whitePlayerTimer.start();
            this.blackPlayerTimer.pause();
          }
    };

    static endOfTime() {
        if (this.whitePlayerTimer.timerHandler.innerHTML === "00:00" || this.blackPlayerTimer.timerHandler.innerHTML === "00:00") {
            this.whitePlayerTimer.stop();
        }
    };

    static getWhiteTimer(){
        return this.whitePlayerTimer;
    }
    static getBlackTimer(){
        return this.blackPlayerTimer;
    }


    startMove(square: HTMLElement): void { //<--metoda wywoływana po klknięciu na którekolwiek z pól na szachownicy
        if (!ifPromotion()) {
            let chosenPiece = Game.getPiece(square);
            if (chosenPiece && Game.currentPlayer.includes(chosenPiece)) {
            Game.setLastChosen(chosenPiece);
            chosenPiece.move();
            Game.beatCounter = 0;
            Game.moveCounter = true;
            }
        }
        endGame();
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
                Game.beatCounter = 1;
            } else {
                this.blacks.splice(this.blacks.indexOf(p),1);
                this.beated.push(p);
                Piece.beated.push(p);
                square.innerHTML = '';
                Game.beatCounter = 1;
            }
        } else {
            return;
        }
    }

    static checkingKings():void{ //<-- ta metoda sprawdza czy któryś z królów jest szachowany
        if(Game.whiteKing.isChecked()){
            if(Game.whiteKing.isCheckmated()){
                console.log('WHITE KING CHECKMATED');
            }
            else{
                console.log('WHITE KING CHECKED');
                if(document.documentElement.lang === 'en'){
                    addMoveHistory(`White king is checked` , '');
                } else {
                    addMoveHistory('Szach na białym królu', '');
                }
            }
        }

        if(Game.blackKing.isChecked()){
            if(Game.blackKing.isCheckmated()){
                console.log('BLACK KING CHECKMATED');
            } else{
                console.log('BLACK KING CHECKED');
                if(document.documentElement.lang === 'en'){
                    addMoveHistory(`Black king is checked` , '');
                } else {
                    addMoveHistory('Szach na czarnym królu', '');
                }
            }

        }
    }

    static isQueensideCastlingPossible(){

        if(Game.lastChosen.getColor() === 'white'){
            for(let p of Game.whites){
                if(p instanceof Rook && p.getPositionX() === 'A' && p.getPositionY() === 1){
                    return (
                        !Game.whiteKing.hasMoved
                        && !p.hasMoved
                        && document.querySelector('#B-1')!.innerHTML === ''
                        && document.querySelector('#C-1')!.innerHTML === ''
                        && document.querySelector('#D-1')!.innerHTML === ''
                        && !this.whiteKing.isChecked()
                        && this.whiteKing.getDangerZones().indexOf('C-1') === -1
                    )
                }
            }
        }
        else{
            for(let p of Game.blacks){
                if(p instanceof Rook && p.getPositionX() === 'A' && p.getPositionY() === 8){
                    return (
                        !Game.blackKing.hasMoved
                        && !p.hasMoved
                        && document.querySelector('#B-8')!.innerHTML === ''
                        && document.querySelector('#C-8')!.innerHTML === ''
                        && document.querySelector('#D-8')!.innerHTML === ''
                        && !this.blackKing.isChecked()
                        && this.blackKing.getDangerZones().indexOf('C-8') === -1
                    )
                }
            }
        }
        return false;
    }

    static isKingsideCastlingPossible(){
        if(Game.lastChosen.getColor() === 'white'){
            for(let p of Game.whites){
                if(p instanceof Rook && p.getPositionX() === 'H' && p.getPositionY() === 1){
                    return (
                        !Game.whiteKing.hasMoved
                        && !p.hasMoved
                        && document.querySelector('#F-1')!.innerHTML === ''
                        && document.querySelector('#G-1')!.innerHTML === ''
                        && !this.whiteKing.isChecked()
                        && this.whiteKing.getDangerZones().indexOf('G-1') === -1
                    )
                }
            }
        }
        else{
            for(let p of Game.blacks){
                if(p instanceof Rook && p.getPositionX() === 'H' && p.getPositionY() === 8){
                    return (
                        !Game.blackKing.hasMoved
                        && !p.hasMoved
                        && document.querySelector('#F-8')!.innerHTML === ''
                        && document.querySelector('#G-8')!.innerHTML === ''
                        && !this.blackKing.isChecked()
                        && this.blackKing.getDangerZones().indexOf('G-8') === -1
                    )
                }
            }
        }
        return false;
    }

    //COFANIE RUCHÓW

static reverseMove(){
    Game.getLastChosen().reverseLastMove();
    if(Game.beatCounter === 1){
        console.log('test')
        Piece.retLast();
        Game.changeTurn();
        Game.changeTimerTurn();
        Game.beatCounter = 0;
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

    static getWhiteKing():King{
        return Game.whiteKing;
    }

    static getBlackKing():King{
        return Game.blackKing;
    }

    static getLastChosen():Piece{
        return Game.lastChosen;
    }

}

export {Game};
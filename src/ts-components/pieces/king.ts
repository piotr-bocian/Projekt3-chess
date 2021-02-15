import { Piece } from "./piece";
import { Game } from "../game";
import { Pawn } from "./pawn";
import { Rook } from "./rook";
import { addMoveHistory } from "../addMoveHistory";
import { endGame } from '../endGameCases'

class King extends Piece{

    public hasMoved:boolean = false;

    constructor(color:string, positionX:string, positionY:number){
        super(color, positionX, positionY);
        this.symbol = `./../../../Projekt3-chess/static/assets/${this.color}King.png`; //<-- w przyszłości bedzie tu ścieżka do img figury

        this.setOnBoard(this.positionX, this.positionY);
    }

    showPossibleMoves():string[]{ //<-- ta metoda zwraca tablicę ID pól na które może przemieścić się król
        const possibleMoves:string[] = [];

        const arrayOfX:string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
        const indexOfX:number = arrayOfX.indexOf(this.getPositionX());

        for(let i=-1; i<=1; i++){
            for(let j=-1; j<=1; j++){
                const square = document.querySelector(`#${arrayOfX[indexOfX+i]}-${this.getPositionY()+j}`);
                if(square !== null){
                    if(square.innerHTML === '')
                        possibleMoves.push(`${arrayOfX[indexOfX+i]}-${this.getPositionY()+j}`);
                    else if(!square.querySelector('img')!.classList.contains(this.color)){
                        possibleMoves.push(`${arrayOfX[indexOfX+i]}-${this.getPositionY()+j}`);
                    }
                }
            }
        }

        return possibleMoves;
    }

    move():void{    //<-- ta metoda oznacza odpowiednie pola klasą css (aby gracz wiedział że można na nie przejść) oraz nadaje im listenery, które po kliknięciu ustawiają figurę na odpowienim polu
        this.removeClassActive();

        let possibleMovesArr:string[] = this.showPossibleMoves();
        const dangerZones:string[] = this.getDangerZones();

        possibleMovesArr = this.defendKing(possibleMovesArr);

        if(Game.isQueensideCastlingPossible())
        this.queensideCastling();

        if(Game.isKingsideCastlingPossible())
            this.kingsideCastling();


        possibleMovesArr.forEach(id => {    //<-- iterujemy przez tablice możliwych ID
            const square = document.querySelector(`#${id}`);

            if(dangerZones.indexOf(`${square!.id.charAt(0)}-${parseInt(square!.id.charAt(2))}`) !== -1){
                return;
            }

            // if(square!.innerHTML !== '' && !this.isPositonSafe(square!.id.charAt(0), parseInt(square!.id.charAt(2)))){
            //     return;
            // }

            square!.classList.add('active');    //<--oznaczenie wizualne na szachownicy
            square!.addEventListener('click', () => {
                if(square!.classList.contains('active') && (Game.getLastChosen() === this)){
                    if (square!.innerHTML != '') {
                        Game.beat(square! as HTMLElement);
                    }
                    //ZBIERANIE HISTORII RUCHÓW
                    this.history(square!);
                    this.historyNotation();
                    //
                    this.setOnBoard(square!.id.charAt(0), parseInt(square!.id.charAt(2)));  //<-- przeniesienie figury po kliknięciu
                    this.hasMoved = true;
                    this.removeClassActive();
                    Game.changeTimerTurn();
                    endGame(Game.player1Name, Game.player2Name);
                }
            }, {capture: true});
        });
    }

    queensideCastling(){
        if(this.color === 'white'){
            const position = document.querySelector('#C-1');
            position!.classList.add('active');
            //console.log('nadalem klase active na skrzydle hetmanskim')
            console.log(document.querySelector('#C-1'))

            let rook:Rook;
            for(let p of Game.getWhites()){
                if(p instanceof Rook && p.getPositionX() === 'A' && p.getPositionY() === 1)
                    rook = p;
            }

            position!.addEventListener('click', () => {
                if(Game.getLastChosen() === this){
                    this.setOnBoard('C', 1);
                    rook.setOnBoard('D', 1);
                    if(document.documentElement.lang === 'en'){
                        addMoveHistory('Queen side castling', this.color);
                     } else {
                        addMoveHistory('Roszada hetmańska', 'Biały');
                     }
                    this.removeClassActive();
                    Game.changeTurn();
                    Game.changeTimerTurn();

                }
            })
        }
        else{
            const position = document.querySelector('#C-8');
            position!.classList.add('active');

            let rook:Rook;
            for(let p of Game.getBlacks()){
                if(p instanceof Rook && p.getPositionX() === 'A' && p.getPositionY() === 8){
                    rook = p;
                }
            }

            position!.addEventListener('click', () => {
                if(Game.getLastChosen() === this){
                    this.setOnBoard('C', 8);
                    rook.setOnBoard('D', 8);
                    if(document.documentElement.lang === 'en'){
                        addMoveHistory('Queen side castling', this.color);
                     } else {
                        addMoveHistory('Roszada hetmańska', 'Czarny');
                     }
                    this.removeClassActive();
                    Game.changeTurn();
                    Game.changeTimerTurn();
                }
            })
        }
    }

    kingsideCastling(){
        if(this.color === 'white'){

            const position = document.querySelector('#G-1');
            position!.classList.add('active');
            //console.log('nadalem klase active na skrzydle krolweskim')
            console.log(document.querySelector('#G-1'))

            let rook:Rook;
            for(let p of Game.getWhites()){
                if(p instanceof Rook && p.getPositionX() === 'H' && p.getPositionY() === 1)
                    rook = p;
            }

            position!.addEventListener('click', () => {
                if(Game.getLastChosen() === this){
                    this.setOnBoard('G', 1);
                    rook.setOnBoard('F', 1);
                    if(document.documentElement.lang === 'en'){
                        addMoveHistory('King side castling', this.color);
                     } else {
                        addMoveHistory('Roszada na skrzydle królewskim', 'Biały');
                     }
                    this.removeClassActive();
                    Game.changeTurn();
                    Game.changeTimerTurn();
                }
            })
        }
        else{
            const position = document.querySelector('#G-8');
            position!.classList.add('active');

            let rook:Rook;
            for(let p of Game.getBlacks()){
                if(p instanceof Rook && p.getPositionX() === 'H' && p.getPositionY() === 8)
                    rook = p;
            }

            position!.addEventListener('click', () => {
                if(Game.getLastChosen() === this){
                    this.setOnBoard('G', 8);
                    rook.setOnBoard('F', 8);
                    if(document.documentElement.lang === 'en'){
                        addMoveHistory('King side castling', this.color);
                     } else {
                        addMoveHistory('Roszada na skrzydle królewskim', 'Czarny');
                     }
                    this.removeClassActive();
                    Game.changeTurn();
                    Game.changeTimerTurn();

                }
            })
        }
    }

    isChecked():boolean{
        if(this.getDangerZones().indexOf(`${this.positionX}-${this.positionY}`) !== -1){
            return true;
        }
        else
            return false;
    }

    isKingCheckedByThisPiece(piece:Piece){
        let moves:string[] = piece.showPossibleMoves();
        if(moves.indexOf(`${this.positionX}-${this.positionY}`) !== -1){
            return true;
        }
        else{
            return false;
        }
    }

    isCheckmated():boolean{
        //const possibleMovesArr = this.showPossibleMoves().filter(id => {
        //    const dangerArr = this.getDangerZones();
        //    return (dangerArr.indexOf(id) === -1);
        //});

        //return (this.isChecked() && possibleMovesArr.length === 0);
        const possMoves:string[] = [];
        for(let p of (this.color === 'white' ? Game.getWhites() : Game.getBlacks())){
            p.defendKing(p.showPossibleMoves()).forEach(id => possMoves.push(id));
        }
        
        if(this.isChecked() && possMoves.length === 0){
            return true
        }

        return false;
    }

    areAllPossibleMovesInDangerZones():boolean {
        const possibleMoves: string[] = this.showPossibleMoves();
        const dangerZones: string[] = this.getDangerZones();
        let dangerZonesCounter: number = 0;

        if(possibleMoves.length > 0) {
            possibleMoves.forEach(move => {
                if(dangerZones.includes(move)){
                    dangerZonesCounter += 1;
                }
            });
            
            if(dangerZonesCounter === possibleMoves.length){
                return true;
            } else {
                return false;
            }
        }
        return false;
    }

    isPositonSafe(posX:string, posY:number):boolean{
        let safe:boolean;
        const square = document.querySelector(`#${posX}-${posY}`);
        let originalPiece:Piece;
        for(let p of (square!.querySelector('img')!.classList.contains('white') ? Game.getWhites() : Game.getBlacks())){
            if(p.getPositionX() === posX && p.getPositionY() === posY){
                originalPiece = p;
            }
        }
        const originalPieceX = originalPiece!.getPositionX();
        const originalPieceY = originalPiece!.getPositionY();

        const originalKingX = this.positionX;
        const originalKingY = this.positionY;

        const tempPositions = Array.from(document.querySelectorAll('.board-container div')).filter(square => {
            return (square.innerHTML == '');
        });

        const tempPieceX:string = tempPositions[0].id.charAt(0);
        const tempPieceY:number = parseFloat(tempPositions[0].id.charAt(2));
        //console.log(originalPiece!);
        //console.log(tempPieceX, tempPieceY);
        originalPiece!.setOnBoard(tempPieceX, tempPieceY);
        Game.changeTurn();
        console.log(originalPiece!);

        this.setOnBoard(originalPieceX, originalPieceY);
        if(this.isChecked()){
            safe = false;
        }
        else{
            safe = true;
        }

        this.setOnBoard(originalKingX, originalKingY);
        Game.changeTurn;
        originalPiece!.setOnBoard(originalPieceX, originalPieceY);
        Game.changeTurn();

        return safe;
    }

    getDangerZones():string[]{
        const dangerArr:string[] = [];

        if(this.color === 'white'){
            for(let p of Game.getBlacks()){
                if(!(p instanceof Pawn)){
                    const possibleOpponentMoves = p.showPossibleMoves();
                    possibleOpponentMoves.forEach(id => {
                        dangerArr.push(id);
                    })
                }
                else{
                    const possiblePawnAttacks = p.getAttacks();
                    possiblePawnAttacks.forEach(attack => dangerArr.push(attack));
                }
            }
        }
        else{
            for(let p of Game.getWhites()){
                if(!(p instanceof Pawn)){
                    const possibleOpponentMoves = p.showPossibleMoves();
                    possibleOpponentMoves.forEach(id => {
                        dangerArr.push(id);
                    })
                }
                else{
                    const possiblePawnAttacks = p.getAttacks();
                    possiblePawnAttacks.forEach(attack => dangerArr.push(attack));
                }
            }
        }

        return dangerArr;
    }

    allPossibleMoves():number{
        const allMoves:string[] = [];
    
        if(this.color === 'white'){
            for(let p of Game.getWhites()){
                if(!(p instanceof Pawn)){
                    if(!(p instanceof King)){
                        const possibleMoves = p.showPossibleMoves();
                        possibleMoves.forEach(id => {
                            allMoves.push(id);
                        });
                    }
                }
                else{
                    const possiblePawnAttacks = p.getAttacks();
                    possiblePawnAttacks.forEach(attack => allMoves.push(attack));
                }
            }
        }
        else{
            for(let p of Game.getBlacks()){
                if(!(p instanceof Pawn)){
                    if(!(p instanceof King)){
                        const possibleMoves = p.showPossibleMoves();
                        possibleMoves.forEach(id => {
                            allMoves.push(id);
                        });
                    }
                }
                else{
                    const possiblePawnAttacks = p.getAttacks();
                    possiblePawnAttacks.forEach(attack => allMoves.push(attack));
                }
            }
        }
    
        return allMoves.length;
    }
}

export {King};
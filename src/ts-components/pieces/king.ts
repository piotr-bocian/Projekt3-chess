import { Piece } from "./piece";
import { Game } from "../game";
import { Pawn } from "./pawn";
import { Rook } from "./rook";

class King extends Piece{

    public hasMoved:boolean = false;

    constructor(color:string, positionX:string, positionY:number){
        super(color, positionX, positionY);
        this.symbol = `../../../static/assets/${this.color}King.png`; //<-- w przyszłości bedzie tu ścieżka do img figury

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

        const possibleMovesArr:string[] = this.showPossibleMoves();
        const dangerZones:string[] = this.getDangerZones();
        console.log(dangerZones);
        if(Game.isQueensideCastlingPossible())
        this.queensideCastling();

        if(Game.isKingsideCastlingPossible())
            this.kingsideCastling();

        
        possibleMovesArr.forEach(id => {    //<-- iterujemy przez tablice możliwych ID
            const square = document.querySelector(`#${id}`);

            if(dangerZones.indexOf(`${square!.id.charAt(0)}-${parseInt(square!.id.charAt(2))}`) !== -1){
                return;
            }

            square!.classList.add('active');    //<--oznaczenie wizualne na szachownicy
            square!.addEventListener('click', () => {
                if(square!.classList.contains('active') && (Game.getLastChosen() === this)){
                    if (square!.innerHTML != '') {
                        Game.beat(square! as HTMLElement);
                    }
                    this.setOnBoard(square!.id.charAt(0), parseInt(square!.id.charAt(2)));  //<-- przeniesienie figury po kliknięciu
                    this.hasMoved = true;
                    this.removeClassActive();
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
                    this.removeClassActive();
                    Game.changeTurn();
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
                    this.removeClassActive();
                    Game.changeTurn();
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
                    this.removeClassActive();
                    Game.changeTurn();
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
                    this.removeClassActive();
                    Game.changeTurn();
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

    isCheckmated():boolean{
        const possibleMovesArr = this.showPossibleMoves().filter(id => {
            const dangerArr = this.getDangerZones();
            return (dangerArr.indexOf(id) === -1);
        });

        return (this.isChecked() && possibleMovesArr.length === 0);
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
}

export {King};
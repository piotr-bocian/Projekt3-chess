import { Piece } from "./piece";
import { Game } from "../game";
import { Knight } from "./knight";
import { Rook } from "./rook";
import { Bishop } from "./bishop";
import { Pawn } from "./pawn";
import { Queen } from "./queen";

class King extends Piece{

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
                    else if(!square.querySelector('img')!.classList.contains(this.color))
                        possibleMoves.push(`${arrayOfX[indexOfX+i]}-${this.getPositionY()+j}`);    
                }    
            }
        }
        
        return possibleMoves;
    }

    move():void{    //<-- ta metoda oznacza odpowiednie pola klasą css (aby gracz wiedział że można na nie przejść) oraz nadaje im listenery, które po kliknięciu ustawiają figurę na odpowienim polu
        this.removeClassActive();

        const possibleMovesArr:string[] = this.showPossibleMoves();
        const dangerZones:string[] = this.getDangerZones();
        
        possibleMovesArr.forEach(id => {    //<-- iterujemy przez tablice możliwych ID
            const square = document.querySelector(`#${id}`);
            
            if(dangerZones.indexOf(`${square!.id.charAt(0)}-${parseInt(square!.id.charAt(2))}`) !== -1){
                return;
            }

            square!.classList.add('active');    //<--oznaczenie wizualne na szachownicy
            square!.addEventListener('click', () => {
                if(square!.classList.contains('active') && (Game.getLastChosen() === this)){
                    this.setOnBoard(square!.id.charAt(0), parseInt(square!.id.charAt(2)));  //<-- przeniesienie figury po kliknięciu
                    this.removeClassActive();
                }
            });

        });
    }

    isChecked():boolean{
        if(this.getDangerZones().indexOf(`${this.positionX}-${this.positionY}`) !== -1){
            return true;
        }
        else
            return false;
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
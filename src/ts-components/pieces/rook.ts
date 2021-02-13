"use stricte"

import {Piece} from "./piece";
import { Game } from "../game";

//wieża
class Rook extends Piece{

    public hasMoved:boolean = false;

    constructor(color:string, positionX:string, positionY:number){
        super(color, positionX, positionY);
        this.symbol = `../../../static/assets/${this.color}Rook.png`;
        this.setOnBoard(this.positionX, this.positionY);
    }
    showPossibleMoves(): string[]{
        //this.removeClassActive();
        const arrayOfX:string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
        // const indexOfX:number = arrayOfX.indexOf(this.getPositionX());
        const PossibleMoves:any  = [];

        const rookLineX:string = this.getPositionX();
        const rookLineY:number = this.getPositionY();

        const checkYAxis = ()=>{
            // top
            //console.log(rookLineX,rookLineY)
            for(let i=rookLineY+1;i<=8;i++){
                let squareY = document.querySelector(`#${rookLineX}-${i}`);
                if(!(squareY?.querySelector('img')) || squareY.innerHTML === ""){
                    if (squareY != null)
                    // squareY.classList.add('active');
                    PossibleMoves.push(`${rookLineX}-${i}`)
                }
                else{
                    if(!(squareY?.querySelector('img')?.classList.contains(this.color))){
                        PossibleMoves.push(`${rookLineX}-${i}`);
                        break;
                    }
                    break;

                }
            }
            // bot
            for(let i=rookLineY-1;i>0;i--){
                let squareY = document.querySelector(`#${rookLineX}-${i}`);
                if(!(squareY?.querySelector('img')) || squareY.innerHTML === ""){
                    if (squareY != null)
                    // squareY.classList.add('active');
                    PossibleMoves.push(`${rookLineX}-${i}`)
                }
                else{
                    if(!(squareY?.querySelector('img')?.classList.contains(this.color))){
                        PossibleMoves.push(`${rookLineX}-${i}`);
                        break;
                    }
                    break;
                }
            }
        }
        const checkXAxis = ()=>{
            // right
            const clickedElementIndex = arrayOfX.indexOf(rookLineX)
            for(let i=clickedElementIndex;i<=7;i++){
                let squareY = document.querySelector(`#${arrayOfX[i+1]}-${rookLineY}`);
                if(!(squareY?.querySelector('img')) || squareY.innerHTML === ""){
                    if (squareY != null)
                    // squareY.classList.add('active');
                    PossibleMoves.push(`${arrayOfX[i+1]}-${rookLineY}`)
                }
                else{
                    if(!(squareY?.querySelector('img')?.classList.contains(this.color))){
                        PossibleMoves.push(`${arrayOfX[i+1]}-${rookLineY}`);
                        break;
                    }
                    break;
                }
            }
            // left
            for(let i=clickedElementIndex;i>0;i--){
                let squareY = document.querySelector(`#${arrayOfX[i-1]}-${rookLineY}`);
                if(!(squareY?.querySelector('img')) || squareY.innerHTML === ""){
                    if (squareY != null)
                    // squareY.classList.add('active');
                    PossibleMoves.push(`${arrayOfX[i-1]}-${rookLineY}`)
                }
                else{
                    if(!(squareY?.querySelector('img')?.classList.contains(this.color))){
                        PossibleMoves.push(`${arrayOfX[i-1]}-${rookLineY}`);
                        break;
                    }
                    break;
                }
            }
        }
        checkYAxis();
        checkXAxis();
        // const squares:NodeList = document.querySelectorAll('.board-container div');
        // squares.forEach(square => {
        //     square.addEventListener('click', (e) => {
        //         let pickedFigure = e.currentTarget;

        //         if(!((square as HTMLElement).classList.contains('pieceInside')) && (square as HTMLElement).classList.contains('active')   && (Game.getLastChosen() === this)){
        //             this.setOnBoard((square as HTMLElement).id.charAt(0), parseInt((square as HTMLElement).id.charAt(2)));
        //             squares.forEach(square => (square as HTMLElement).classList.remove('active'));
        //         }
        //     });
        // });
    
        return PossibleMoves;
    }

    move():void{    //<-- ta metoda oznacza odpowiednie pola klasą css (aby gracz wiedział że można na nie przejść) oraz nadaje im listenery, które po kliknięciu ustawiają figurę na odpowienim polu
        this.removeClassActive();

        let possibleMovesArr:string[] = this.showPossibleMoves();

        possibleMovesArr = this.defendKing(possibleMovesArr);

        possibleMovesArr.forEach(id => {    //<-- iterujemy przez tablice możliwych ID
            const square = document.querySelector(`#${id}`);
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
                    Game.checkingKings();
                    Game.changeTimerTurn();
                }
            }, {capture: true});

        });
    }
}
export {Rook};
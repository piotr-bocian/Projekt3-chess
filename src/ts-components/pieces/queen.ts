import { ID } from "../board";
import { MovesShow, QueenMethods} from "../interfaces/pieceMethodsInterfaces";
import {Piece} from "./piece";
import { Game } from "../game"
//królowa / hetman
class Queen extends Piece implements QueenMethods{
    constructor(color:string, positionX:string, positionY:number){
        super(color, positionX, positionY);
        this.symbol = `../../../static/assets/${this.color}Queen.png`;
        this.setOnBoard(this.positionX, this.positionY);
    }

    showPossibleMoves(){

        const allPossibleMoves:string[] = [];
         this.collectAllPossibleMoves().forEach(id=>{
             allPossibleMoves.push(id);
            })
            //console.log(allPossibleMoves);
            return allPossibleMoves
    }

    move(){
        this.removeClassActive();
        // const movesShow:MovesShow =(id:string)=>{
        //     const movesPossibilities = [...document.querySelectorAll(`#${id}`)];
        //         movesPossibilities.forEach(el=>{
        //                 el.classList.add('active');
        //         })
        //  }

         this.defendKing(this.showPossibleMoves()).forEach(id=>{
            document.querySelector(`#${id}`)!.classList.add('active');
            // movesShow(id)
         })

        const squares = [...document.querySelectorAll('.active')];
        squares.forEach(square => {
            square.addEventListener('click', () => {
                if((square).classList.contains('active')
                &&(Game.getLastChosen() === this)) {
                    if (square.innerHTML != '') {
                        Game.beat(square as HTMLElement);
                    }
                    //ZBIERANIE HISTORII RUCHÓW
                    this.history(square);
                    //PL
                    const lang = document.documentElement.lang;
                    if(lang === 'pl'){ //zmieniłem tu kolory na white i black jak zmieniały się klasy w DOM to biecie źle działało dla królowej.
                        (this.color === 'white'|| this.color === 'Biały') ? this.color ='white' : this.color = 'black';
                        this.historyNotation('poruszył/a się z pola', 'na pole', 'Królowa');
                    } else {
                        this.color = this.color;
                        this.historyNotation();
                    }
                    //
                    this.setOnBoard((square).id.charAt(0), parseInt((square).id.charAt(2)));
                    this.removeClassActive();
                    Game.checkingKings();
                }
            }, {capture: true});
        });
    }

collectAllPossibleMoves(){
    const coordinateX : number = Object.values(ID).indexOf(this.positionX) + 1;
    const moves:string[]=[];
    const moveUp=()=>{
    for(let i=this.positionY +1; i<9; i++){
        const doc = document.getElementById(`${this.positionX}-${i}`)!;
        const checker = doc.classList.contains('pieceInside')
        const colorCheck = doc.querySelector('img')?.classList.contains(`${this.color}`);
        // if(checker) return; <- z tego powodu nie dochodziło do sprawdzania koloru
        // to samo zrobiłem dla down, left i right
        if (checker) {
            if(!colorCheck){
                    moves.push(`${this.positionX}-${i}`);
                    return;
                } else {
                    return; //dlatego przeniosłem to tutaj, dzięki temu działa bicie
                }
        } else {
            moves.push(`${this.positionX}-${i}`);
            // return;
        }
    }
}
    const moveDown = ()=>{
        for(let j=this.positionY - 1; j>0; j--){
            const doc = document.getElementById(`${this.positionX}-${j}`)!;
        const checker = doc.classList.contains('pieceInside')
        const colorCheck = doc.querySelector('img')?.classList.contains(`${this.color}`);
        // if(checker) return;
    if (checker) {
        if(!colorCheck){
                moves.push(`${this.positionX}-${j}`);
                return;
            } else {
                return;
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
        // if(checker) return;
    if (checker) {
        if(!colorCheck){
            moves.push(`${ID[i]}-${this.positionY}`)
                return
            } else {
                return;
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
        // if(checker) return;
    if (checker) {
        if(!colorCheck){
            moves.push(`${ID[i]}-${this.positionY}`)
                return
            } else {
                return;
            }
    } else {
        moves.push(`${ID[i]}-${this.positionY}`)
            }
            }
            }

const diagonalMoves=()=>{

        // top right
        let position:number;
        if (9 - coordinateX < 9 - this.positionY) {
            position = 9 - coordinateX;
        } else {
            position = 9 - this.positionY
        }
            for(let i=1; i<position; i++){
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

        // down left
        if (this.positionY - 1 < coordinateX - 1) {
            position = this.positionY;
        } else {
            position = coordinateX;
        }
            for(let i=1 ; i < position; i++){
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


        // top left
        if (coordinateX < 9 - this.positionY) {
            position = coordinateX;
        } else {
            position = 9 - this.positionY
        }
            for(let i = 1; i < position; i++){
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


        // down right
        if (this.positionY < 9 - coordinateX) {
            position = this.positionY
        } else {
            position = 9 - coordinateX
        }
            for(let i = 1 ; i < position ; i++){
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

    diagonalMoves()
    moveUp()
    moveDown()
    moveLeft()
    moveRight()
    return moves;
}

}

export {Queen};
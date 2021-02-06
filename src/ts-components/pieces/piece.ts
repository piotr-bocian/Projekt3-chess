abstract class Piece{
    public color:string;
    protected symbol:string = ''; //<-- domyślnie ustawiłem puste, bo każda figura ma inny symbol
    protected positionX:string;
    protected positionY:number;
    public parentSquare:HTMLElement;
    public movesHistory: string[][];
    public lastMove: string;
    //zastanawiam się czy nie zrobić tych wszystkich właściwości private...

    constructor(color:string, positionX:string, positionY:number){
        this.color = color;
        this.positionX = positionX;
        this.positionY = positionY;
        this.movesHistory=[];
        this.lastMove ='';
        this.parentSquare = document.getElementById(`${this.positionX}-${this.positionY}`)!; //<-- parentSquare przechowuje diva, w którym obecnie znajduje się figura
    }

    setOnBoard(pX:string, pY:number):void{ //<-- ta metoda zmienia miejsce na szachownicy w którym wyświetla się figura
        this.parentSquare.innerHTML = '';
        this.parentSquare.classList.remove('pieceInside');
        const img = document.createElement('img');
        img.classList.add(`${this.color}`);
        img.setAttribute('src', this.symbol);
        this.updatePosition(pX, pY);
        this.parentSquare.appendChild(img);
        const imgContainer = img.parentElement !as HTMLElement;
        imgContainer.classList.add('pieceInside');
    }

    updatePosition(pX:string, pY:number):void{ //<-- ta metoda aktualizuje stan właściwości positionX i positionY (ale za samo wyświetlenie figury w nowym miejscu odpowiada setOnBoard())
        this.positionX = pX;
        this.positionY = pY;
        this.parentSquare = document.getElementById(`${this.positionX}-${this.positionY}`)!;
    }

    //HISTORIA RUCHÓW
    history(square:Element){
        const fromPositionX = this.getPositionX();
        const fromPositionY = this.getPositionY().toString();
        const toPositionX = `${(square).id.charAt(0)}`;
        const toPositionY = `${parseInt((square).id.charAt(2))}`;
        const descriptive = `${this.color} ${this.constructor.name} moved from ${fromPositionX}-${fromPositionY} to ${toPositionX}-${toPositionY}`;
        this.movesHistory.push([fromPositionX, fromPositionY, toPositionX, toPositionY]);
        this.lastMove = descriptive
        console.log(this.movesHistory);
        console.log(this.lastMove);
    }

    //PROTOTYP COFANIA RUCHÓW
    reverseMove(){
        //tablica ce wszystkimi ruchami pozostaje, działamy na kopii
        const lastMove= this.movesHistory.slice();
            document.querySelector('.btn')?.addEventListener('click', ()=>{
            this.removeClassActive();
            if(lastMove.length === 0){return};
            const popLastMove = lastMove.pop();
            this.movesHistory.length = lastMove.length;
            if (popLastMove){
                console.log(popLastMove);
                    const positionX = popLastMove[0];
                    const positionY = popLastMove[1];
                    if(positionX && positionY){
                        this.setOnBoard(positionX.toUpperCase(), parseInt(positionY));
                    }
                } else {
                    return
                }
            })
    }

    removeClassActive(){
        let elems= [...document.querySelectorAll('.active')];
        for (let i = 0; i < elems.length; i++) {
                elems[i]?.classList.remove('active');
        }
    }


    abstract showPossibleMoves():void;
    abstract move():void;
    // abstract history(square:Element):void;
    getPositionX(){
        return this.positionX;
    }

    getPositionY(){
        return this.positionY;
    }
}

export {Piece};
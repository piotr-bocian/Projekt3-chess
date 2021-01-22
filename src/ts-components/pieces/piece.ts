abstract class Piece{
    protected color:string;
    protected symbol:string = ''; //<-- domyślnie ustawiłem puste, bo każda figura ma inny symbol
    protected positionX:number;
    protected positionY:number;
    protected parentSquare:HTMLElement;
    //zastanawiam się czy nie zrobić tych wszystkich właściwości private...

    constructor(color:string, positionX:number, positionY:number){
        this.color = color;
        this.positionX = positionX;
        this.positionY = positionY;

        this.parentSquare = document.getElementById(`${this.positionX}-${this.positionY}`)!; //<-- parentSquare przechowuje diva, w którym obecnie znajduje się figura
    }

    setOnBoard(pX:number, pY:number):void{ //<-- ta metoda zmienia miejsce na szachownicy w którym wyświetla się figura
        this.parentSquare.innerHTML = '';
        this.updatePosition(pX, pY);
        this.parentSquare.appendChild(document.createTextNode(this.symbol));
    }

    updatePosition(pX:number, pY:number):void{ //<-- ta metoda aktualizuje stan właściwości positionX i positionY (ale za samo wyświetlenie figury w nowym miejscu odpowiada setOnBoard())
        this.positionX = pX;
        this.positionY = pY;
        this.parentSquare = document.getElementById(`${this.positionX}-${this.positionY}`)!;
    }

    abstract showPossibleMoves():void;
}

export {Piece};
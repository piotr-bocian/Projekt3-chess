abstract class Piece{
    protected color:string;
    protected symbol:string = ''; //<-- domyślnie ustawiłem puste, bo każda figura ma inny symbol
    protected positionX:string;
    protected positionY:number;
    protected parentSquare:HTMLElement;
    //zastanawiam się czy nie zrobić tych wszystkich właściwości private...

    constructor(color:string, positionX:string, positionY:number){
        this.color = color;
        this.positionX = positionX;
        this.positionY = positionY;

        this.parentSquare = document.getElementById(`${this.positionX}-${this.positionY}`)!; //<-- parentSquare przechowuje diva, w którym obecnie znajduje się figura
    }

    setOnBoard(pX:string, pY:number):void{ //<-- ta metoda zmienia miejsce na szachownicy w którym wyświetla się figura
        const img = document.createElement('img');
        img.classList.add('image');
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

    abstract showPossibleMoves():void;

    getPositionX(){
        return this.positionX;
    }

    getPositionY(){
        return this.positionY;
    }
}

export {Piece};
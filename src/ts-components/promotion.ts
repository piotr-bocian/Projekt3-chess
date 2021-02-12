import { ID } from "./board";

function ifPromotion(): boolean {

    const possiblePromotion: string[] = [];

    for (var i = 1; i < 9; i ++) {
        let idPossiblePromotion1 = `${ID[i]}-1`
        let idPossiblePromotion2 = `${ID[i]}-8`
        
        possiblePromotion.push(idPossiblePromotion1, idPossiblePromotion2);
    }

    const promotion: string[] = [];

    possiblePromotion.forEach((possibility) => {
        if(document.getElementById(possibility)!.classList.contains('promotion')) {promotion.push(possibility);}
    })

return promotion.length > 0;

}

export { ifPromotion };
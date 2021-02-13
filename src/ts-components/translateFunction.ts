const getName = (constructorName:string)=>{
   switch (constructorName){
   case 'Queen':
     return 'Królowa';
   case 'Rook':
    return 'Wieża';
   case 'Knight':
     return 'Skoczek';
   case 'Bishop':
   return 'Goniec';
   case 'King':
   return 'Król';
   case 'white':
   return 'Biały';
   case 'black':
   return 'Czarny';
   default:
   return 'Pion';
}
}

export {getName}
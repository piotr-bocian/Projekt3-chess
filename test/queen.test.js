const queen = require('../src/js-components/pieces/queen');

it ('should create new queen piece', ()=>{
   const a = new queen.Queen('white', 'C', 1)
   expect(a).toEqual({
      color: 'white',
      positionX: 'C',
   })
})
const { Queen } = require('../src/js-components/pieces/queen');

jest.mock('../src/js-components/pieces/queen');

//testy konstruktora
it('should be true if Queen instance is ok', () => {
  const queen = new Queen('white', 'A', 1);
  expect(queen).toBeTruthy();
});

it('should have empty array of possible moves', () => {
  const queen = new Queen('white', 'A', 1);
  queen.possibleMoves = [];
  expect(queen.possibleMoves).toStrictEqual([]);
});

// it('should have empty array of possible moves', () => {
//   const queen = new Queen('white', 'A', 1);
//   queen.possibleMoves = [];
//   queen.showPossibleMoves('A-1')
//   expect(queen.possibleMoves).toStrictEqual(['A-1']);
// });

const { Queen } = require('../src/js-components/pieces/queen');
const {Board} = require('../src/js-components/board')
const {fillboard} = require('../src/js-components/fillBoard')

jest.mock('../src/js-components/pieces/queen');
// const jestfn = jest.fn();

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



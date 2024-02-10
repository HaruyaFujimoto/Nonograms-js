import { Grid } from '../../src/models/grid';

function createGrid() {
  const x = '';
  const y = '';
  const verticalNumbersString = '';
  const horizontalNumbersString = '';
  const grid = new Grid(x, y, verticalNumbersString, horizontalNumbersString);
  return grid;
}

describe('model Grid', () => {
  test('method parse()', () => {
    const grid = createGrid();
    const result = grid.parse('1 2 3');
    const expected = [
      [1, 2, 3]
    ];
    expect(result).toEqual(expected);
  })
});

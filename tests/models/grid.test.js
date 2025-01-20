import { Grid } from '../../src/models/grid';

function createGrid() {
  const x = 5;
  const y = 5;
  const verticalNumbersString = '';
  const horizontalNumbersString = '';
  const grid = new Grid(x, y, verticalNumbersString, horizontalNumbersString);
  return grid;
}

describe('model Grid', () => {
  test('constructor()', () => {
    const grid = new Grid(5, 5, '1 2 3', '4 5 6');
    // verticalNumbers
    let expected = [[1, 2, 3]];
    expect(grid.verticalNumbers).toEqual(expected);
    // horizontalNumbers
    expected = [[4, 5, 6]];
    expect(grid.horizontalNumbers).toEqual(expected);
  });

  test('method parse()', () => {
    const grid = createGrid();
    const result = grid.parse('1 2 3');
    const expected = [[1, 2, 3]];
    expect(result).toEqual(expected);
  });
});

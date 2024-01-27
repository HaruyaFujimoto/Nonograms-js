export class Grid {

  constructor(x, y, verticalNumbersString, horizontalNumbersString) {
    this.x = x;
    this.y = y;
    this.verticalNumbersString = verticalNumbersString;
    this.horizontalNumbersString = horizontalNumbersString;
  }

  parse(numbersString,) {
    rows = numbersString.strip().split('\n');
    return rows.map((row) => row.strip().split('\s'));
  }
}

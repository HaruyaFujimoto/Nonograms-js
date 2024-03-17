export class Grid {
  constructor(x, y, verticalNumbersString, horizontalNumbersString) {
    this.x = x;
    this.y = y;
    this.verticalNumbersString = verticalNumbersString;
    this.horizontalNumbersString = horizontalNumbersString;
  }

  parse(numbersString) {
    const rows = numbersString.trim().split('\n');
    return rows.map((row) =>
      row
        .trim()
        .split(/\s+/)
        .map((item) => parseInt(item)),
    );
  }
}

export class Grid {
  constructor(x, y, verticalNumbersString, horizontalNumbersString) {
    // 引数をプロパティに保存
    this.x = x;
    this.y = y;
    this.verticalNumbersString = verticalNumbersString;
    this.horizontalNumbersString = horizontalNumbersString;

    // 
    this.horizontalNumbers = this.parse(this.horizontalNumbersString);
    this.verticalNumbers = this.parse(this.verticalNumbersString);
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

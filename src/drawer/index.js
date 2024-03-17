import { Application, Graphics } from 'pixi.js';

const options = {
  background: '#1099bb',
  resizeTo: window,
};

// pixi.js のアプリケーションクラスをインスタンス化
export const app = new Application(options);

// graphic options
const BASE_X = 1 + 20;
const BASE_Y = 1 + 20;
const BOX_SIZE = 20;
const LINE_WIDTH = 2;
const BOLD_LINE_WIDTH = LINE_WIDTH * 2;

const COLORS = {
  WHITE: 0xffffff,
  WHITE_GRAY: 0x888888,
  DARK_GRAY: 0x333333,
  BLACK: 0x222222,
}

const LINE_COLOR = COLORS.WHITE_GRAY;
const BOLD_LINE_COLOR = COLORS.DARK_GRAY;

// 表組みのマスの群を描画
function drawBoxes(graphics, squares) {
  // 個々の1マスを描画
  function generateBox(graphics, xIndex, yIndex, value) {
    // const _graphics = new Graphics(); // IDE の補助によるメソッド確認用
    graphics.lineStyle(LINE_WIDTH, LINE_COLOR, 1);

    const fillColor = ((value) => {
      switch (value) {
        case 0:
          return COLORS.WHITE;
        case 1:
          return COLORS.BLACK;
        case 2:
          return COLORS.WHITE;
      }
    })(value);
    graphics.beginFill(fillColor);

    // coordinate
    const x = xIndex * BOX_SIZE + BASE_X;
    const y = yIndex * BOX_SIZE + BASE_Y;
    graphics.drawRect(x, y, BOX_SIZE, BOX_SIZE);
    graphics.endFill();
    if (value === 2) {
      graphics.lineStyle(LINE_WIDTH, LINE_COLOR, 1);
      graphics.moveTo(x, y);
      graphics.lineTo(x + BOX_SIZE, y + BOX_SIZE);
    }
    return;
  }
  squares.forEach((row, i) => {
    row.forEach((v, j) => {
      generateBox(graphics, j, i, v);
    });
  });
}

// 罫線を描画
function drawBoldLines(graphics, squares) {
  // const graphics = new Graphics();
  graphics.lineStyle(BOLD_LINE_WIDTH, BOLD_LINE_COLOR, 1);
  const numOfX = squares[0].length;
  const numOfY = squares.length;

  function drawVerticalLine(x, y, numOfY) {
    graphics.moveTo(x, y - BOLD_LINE_WIDTH / 2);
    graphics.lineTo(x, y + numOfY * BOX_SIZE + BOLD_LINE_WIDTH / 2);
  }

  function drawHorizontalLine(x, y, numOfX) {
    graphics.moveTo(x - BOLD_LINE_WIDTH / 2, y);
    graphics.lineTo(x + numOfX * BOX_SIZE + BOLD_LINE_WIDTH / 2, y);
  }

  // draw vertical lines
  drawVerticalLine(BASE_X, BASE_Y, numOfY);
  [...Array(numOfX / 5)].map((_, i) => {
    const x = BASE_X + (i + 1) * BOX_SIZE * 5;
    const y = BASE_Y;
    drawVerticalLine(x, y, numOfY);
  });

  // draw horizontal lines
  drawHorizontalLine(BASE_X, BASE_Y, numOfX);
  [...Array(numOfY / 5)].map((_, i) => {
    const x = BASE_X;
    const y = BASE_Y + (i + 1) * BOX_SIZE * 5;
    drawHorizontalLine(x, y, numOfX);
  });
}

// 描画に使用するインスタンス
const graphics = new Graphics();

// インスタンスをアプリケーションクラスに登録
app.stage.addChild(graphics);

export const generateSquares = (x = 1, y = 1) => {
  return Array(y).fill(Array(x).fill(0));
};

// 全ての描画を行う関数
export const draw = (squares) => {
  graphics.clear();
  drawBoxes(graphics, squares);
  drawBoldLines(graphics, squares);
};

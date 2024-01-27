import { app, draw, generateSquares } from './drawer';

document.body.appendChild(app.view);

function main(x = 25, y = 15, verticalNumbersString, horizontalNumbersString) {
  const squares = generateSquares(x, y);
  const randomSquare = squares.map(
    (row) => row.map(
      (_) => Math.floor(Math.random() * 3)
    )
  );
  draw(randomSquare);
}

main()
// setInterval(main, 200)

function onSubmit(e) {
  e.preventDefault();
  // 横のマス目の数
  const x = parseInt(document.getElementById('numOfColumns').value);
  // 縦のマス目の数
  const y = parseInt(document.getElementById('numOfRows').value);
  console.log([x, y])
  // 
  const verticalNumbersString = document.getElementById('verticalNumbers').value;
  const horizontalNumbersString = document.getElementById('horizontalNumbers').value;
  if (x % 5 === 0 && y % 5 === 0) {
    main(x, y, verticalNumbersString, horizontalNumbersString);
    return;
  }
  window.alert('値は5の倍数である必要があります。');
}

document.getElementById('submit').addEventListener('click', onSubmit);

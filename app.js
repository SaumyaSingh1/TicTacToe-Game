const arr = Array(9).fill(null);
let currentPlayer = "X";

function writeXorO(elem) {
  const iid = Number(elem.id);
  if (arr[iid] !== null) return;
  arr[iid] = currentPlayer;
  elem.innerText = currentPlayer;
  checkWinner();

  if (currentPlayer == "X") {
    currentPlayer = "O";
  } else {
    currentPlayer = "X";
  }
}

function checkWinner() {
  let resultMsg = '';

  if (
    (arr[0] !== null && arr[0] == arr[1] && arr[1] == arr[2]) ||
    (arr[3] !== null && arr[3] == arr[4] && arr[4] == arr[5]) ||
    (arr[6] !== null && arr[6] == arr[7] && arr[7] == arr[8]) ||
    (arr[0] !== null && arr[0] == arr[3] && arr[3] == arr[6]) ||
    (arr[1] !== null && arr[1] == arr[4] && arr[4] == arr[7]) ||
    (arr[2] !== null && arr[2] == arr[5] && arr[5] == arr[8]) ||
    (arr[0] !== null && arr[0] == arr[4] && arr[4] == arr[8]) ||
    (arr[2] !== null && arr[2] == arr[4] && arr[4] == arr[6])
  ) {
    resultMsg = `Winner is ${currentPlayer} :) Please Refresh!`;
    document.getElementById("result").innerHTML = resultMsg;
  } else if (!arr.some((e) => e === null)) {
    resultMsg = `It's a Draw!!! :( `;
    document.getElementById("result").innerHTML = resultMsg;
  }
}

const cursor = document.querySelector('.cursor');
let timeout;

document.addEventListener('mousemove', (e) => {
  let x = e.pageX;
  let y = e.pageY;

  cursor.style.top = y + 'px';
  cursor.style.left = x + 'px';
  cursor.style.display = 'block';

  function mouseStop() {
    cursor.style.display = 'none';
  }

  clearTimeout(timeout);
  timeout = setTimeout(mouseStop, 1000);
});

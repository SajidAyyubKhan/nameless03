let randomMove;
let computerMove;
let result;
const score = JSON.parse(localStorage.getItem('score')) || {
  win: 0,
  lose: 0,
  tie: 0
};
// const score = {
//   win: 0,
//   lose: 0,
//   tie: 0
// };

showResult();

function pickComputerMove() {
  randomMove = Math.random();
  let computerMove;
  if (randomMove >= 0 && randomMove < 1/3) {
    computerMove = 'Rock';
  } else if (randomMove >= 1/3 && randomMove < 2/3) {
    computerMove = 'Paper';
  } else {
    computerMove = 'Scissors';
  }
  return computerMove;
}

function finalResult(playerMove) {
  computerMove = pickComputerMove();
  if (playerMove === 'Rock' && computerMove === 'Paper' || playerMove === 'Paper' && computerMove === 'Scissors' || playerMove === 'Scissors' && computerMove === 'Rock') {
    result = 'You Lose.';
    score.lose++;
  } else if (playerMove  === 'Rock' && computerMove === 'Scissors' || playerMove === 'Paper' && computerMove === 'Rock' || playerMove === 'Scissors' && computerMove === 'Paper') {
    result = 'You Win.';
    score.win++
  } else {
    result = 'Tie.';
    score.tie++;
  }

  showResult(playerMove);
  
  localStorage.setItem('score', JSON.stringify(score));
}

function showResult(playerMove) {
  let win = document.querySelector('.wins');
  win.innerHTML = `Wins: ${score.win}`;

  let lose = document.querySelector('.losses');
  lose.innerHTML = `Losses: ${score.lose}`;

  let tie = document.querySelector('.ties');
  tie.innerHTML = `Ties: ${score.tie}`;

  let jsResult = document.querySelector('.result');
  let jsDisplayMoves = document.querySelector('.display-moves');
  if (!result || !playerMove) {
    jsResult.innerHTML = '(((:::)))';
    jsDisplayMoves.innerHTML = '(((:::)))';
  } else {
    jsResult.innerHTML = `${result}`;
    jsDisplayMoves.innerHTML = `You ${playerMove} ::: ${computerMove} Computer`;
  }
}
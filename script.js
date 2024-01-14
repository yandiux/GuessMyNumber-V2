'use strict';
/*
document.querySelector('.message').textContent;
document.querySelector('.message').textContent = 'Correct number 😀';
document.querySelector('.number').textContent = 12;
document.querySelector('.score').textContent = 15;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

//Eventos

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);

let score = 20;
let highscore = 0;

const valueIpunt = function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (!guess) {
    document.querySelector('.message').textContent =
      'No number was provided, provide a number';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '😎 Correct!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    score++;
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess > secretNumber) {
    document.querySelector('.message').textContent = '😫 To high';
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😫 You lost the game';
      document.querySelector('.score').textContent = 0;
    }

    // if fail then we decrease the score
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = '😫 To low';
    // if fail then we decrease the score
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😫 You lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }
};
document.querySelector('.check').addEventListener('click', valueIpunt);
// again button reload

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.message').textContent = 'Start guessing...';

  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
//Implementing the game logic

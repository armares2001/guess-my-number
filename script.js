'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct number!';

// document.querySelector('.number').textContent = 40;
// document.querySelector('.score').textContent = 2;
// console.log(document.querySelector('.guess').value);
// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let num = Math.trunc(Math.random() * 20) + 1;

let score = 20;
document.querySelector('.score').textContent = score;
let highscore = 0;

document.querySelector('.check').addEventListener('click', e => {
  const guess = +document.querySelector('.guess').value;
  const highscoreReal = +document.querySelector('.highscore').textContent;

  let textConsole = 'ERROR';
  let bodyBackgroundColor = '#222';
  let numWidth = '15rem';
  let numDisplay = '?';

  if (guess > num) {
    textConsole = "It's too high";
    score--;
  }

  if (guess < num) {
    textConsole = "It's too low";
    score--;
  }

  if (guess === num) {
    textConsole = 'Correct Number';
    bodyBackgroundColor = '#60b347';
    numWidth = '30rem';
    numDisplay = num;
    console.log(score, highscoreReal);
    if (score > highscoreReal) {
      highscore = score;
    }
  }

  if (!guess) {
    textConsole = 'NO NUMBER';
  }

  if (score <= 0) {
    textConsole = 'TOU LOST THE GAME';
    score = 0;
  }

  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = textConsole;
  document.querySelector('body').style.backgroundColor = bodyBackgroundColor;
  document.querySelector('.number').style.width = numWidth;
  document.querySelector('.number').textContent = numDisplay;
  document.querySelector('.highscore').textContent = highscore;

  console.log(score, textConsole, bodyBackgroundColor, numWidth, numDisplay);
});

document.querySelector('.again').addEventListener('click', e => {
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  num = Math.trunc(Math.random() * 20) + 1;
});

"use strict";
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
console.log(secretNumber);

document.querySelector(".check").addEventListener("click", function () {
  console.log(document.querySelector(".guess").value);

  //===================  game logic ====================//

  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    document.querySelector(".start").textContent = "No Number";

    //=========win condition ==========//
  } else if (guess === secretNumber) {
    document.querySelector(".title").textContent = "YOU WON";
    document.querySelector(".start").textContent = "Correct Number";
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#37c871";

    //=============scores=================//

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
    
   //===============loose condition======================//

  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".start").textContent = "Too High";
      score--;
      document.querySelector(".score").textContent = score;
    }else{
      document.querySelector(".title").textContent = "YOU LOOSE";
    document.querySelector(".start").textContent = "Better Luck Next Time";
    document.querySelector("body").style.backgroundColor = "#ff0000";
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".start").textContent = "Too Low";
      score--;
      document.querySelector(".score").textContent = score;
    }else{
      document.querySelector(".title").textContent = "YOU LOOSE";
    document.querySelector(".start").textContent = "Better Luck Next Time";
    document.querySelector("body").style.backgroundColor = "#ff0000";
    }
  } 
});


//====================  again button ======================//

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".start").textContent = "Start guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#000";
});
//=====================modal=================================//

const modalBtn = document.querySelector('.show-modal')
const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const closeBtn = document.querySelector('.close-modal')


const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

modalBtn.addEventListener('click', openModal);

closeBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
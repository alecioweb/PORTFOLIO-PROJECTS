const main = document.querySelector(".main");
const overlay = document.querySelectorAll(".overlay");
const overlayBox = document.querySelector(".overlay-box");
const btn = document.querySelector(".btn");
const btnEnd = document.querySelector(".btn-end");
const btnStart = document.getElementById("btn--start");
const inputName = document.querySelector(".input-name");
const container = document.querySelector(".container");
const inputLabel = document.querySelector(".label");

const playerName0 = document.getElementById("name--0"),
  playerName1 = document.getElementById("name--1");

//user names
let player = [0, 0];

btnStart.addEventListener("click", function () {
  // console.log("clicked");

  console.log(inputName.value);
  //checking if input is at least 3 characters
  if (inputName.value.length < 3) {
    alert("Nome tem que conter pelo menos 3 caracteres!");
    //checking if player 0 is a string
  } else if (typeof player[0] === "string") {
    player[1] = inputName.value;
    inputName.value = "";
    //to hide first screen
    container.classList.add("hide-right");
    //to start animation and transition to the player screen
    overlayBox.classList.add("start-animation");

    //hiding first screen after animation starts
    setTimeout(function () {
      // overlayBox.classList.remove("start-animation");
      container.style.display = "none";
    }, 300);

    //show player screen when animation is about to end
    setTimeout(function () {
      main.style.display = "flex";
      //assigning player name into the DOM
      playerName0.textContent = player[0];
      playerName1.textContent = player[1];
    }, 600);

    //assigning player 0 name
  } else {
    inputLabel.textContent = "Jogador 2";
    player[0] = inputName.value;
    inputName.value = "";
  }
});

const player0El = document.querySelector(".player--0"),
  player1El = document.querySelector(".player--1");
const btnRoll = document.getElementById("btn--roll"),
  btnHold = document.getElementById("btn--hold"),
  btnNew = document.getElementById("btn--new");

let playing, currentScore, scores, activePlayer;
let diceEl = document.querySelector(".dice");

const init = function () {
  playing = true;
  activePlayer = 0;
  currentScore = 0;
  scores = [0, 0];

  player0El.classList.remove("player--winner");
  player1El.classList.remove("player--winner");
  player0El.classList.add("player--active");
  player1El.classList.remove("player--active");
};

init();

const switchPlayer = function () {
  //changing current score in the html
  document.querySelector(`.current--${activePlayer}`).textContent = 0;
  //changing current score in js/variable
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};

btnRoll.addEventListener("click", function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    diceEl.classList.remove("dice--hide");
    diceEl.src = `img/dice-${dice}.svg`;

    if (dice !== 1) {
      currentScore += dice;

      document.querySelector(`.current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener("click", function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    console.log(scores);
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // document.getElementById(`score--${activePlayer}`).textContent =
    //   scores[activePlayer];
    if (scores[activePlayer] >= 100) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
      diceEl.classList.add("dice--hide");
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener("click", function () {
  window.location.reload();
});

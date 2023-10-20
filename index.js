let player = {
  name: "Rafay",
  chips: 500,
};

let cards = [];
let sum = 0;
let message = "";
let distributerEl = document.getElementById("distributer");
let cardsEl = document.getElementById("cards");
let sumEl = document.getElementById("sum");
let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips;

let blackJack = false;
let isAlive = false;

function getRandomNumber() {
  let randomNumber = Math.floor(Math.random() * 12) + 1;
  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else {
    return randomNumber;
  }
}

function startGame() {
  let card1 = getRandomNumber();
  let card2 = getRandomNumber();
  cards = [card1, card2];
  sum = card1 + card2;
  renderGame();
}

function renderGame() {
  if (sum <= 20) {
    message = "Do you want another card?";
    isAlive = true;
  } else if (sum === 21) {
    message = "You won Black Jack";
    blackJack = true;
  } else {
    message = "You Lost";
    isAlive = false;
  }

  distributerEl.textContent = message;

  cardsEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }

  sumEl.textContent = "Sum: " + sum;
}

function addCard() {
  if (isAlive === true && blackJack === false) {
    let newCard = getRandomNumber();
    sum += newCard;
    cards.push(newCard);
    renderGame();
  }
}

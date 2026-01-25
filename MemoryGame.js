class Card {
  constructor(id, image) {
    this.isMatched = false;
    this.isFlipped = false;
    this.id = id;
    this.image = image;
  }

  Draw = () => {
    // Makes nested html elements that should be structured like so:

    // div class="card-container">
    //     <div class="card-inner">
    //       <div class="card-front"><img id = "card-front__img" /></div>
    //       <div class="card-back"><img id = "card-back__img" /></div>
    //     </div>
    //   </div>

    this.cardContainer = document.createElement("button");
    this.cardContainer.setAttribute("class", "card-container");

    this.cardInner = document.createElement("div");
    this.cardInner.setAttribute("class", "card-inner");

    this.cardFront = document.createElement("div");
    this.cardFront.setAttribute("class", "card-front");

    this.cardBack = document.createElement("div");
    this.cardBack.setAttribute("class", "card-back");
    this.cardBack.style.background = `url(${this.image})`;
    this.cardBack.style.backgroundRepeat = "no-repeat";
    this.cardBack.style.backgroundSize = "cover";

    this.cardContainer.appendChild(this.cardInner);
    this.cardInner.appendChild(this.cardFront);
    this.cardInner.appendChild(this.cardBack);
    document.getElementById("grid-container").appendChild(this.cardContainer);
    this.cardContainer.addEventListener("click", this.Flip);
  };

  Flip = () => {
    if (isGameOver || lockBoard || this.isFlipped || this.isMatched) return;

    if (!this.isFlipped && !this.isMatched) {
      this.cardInner.style.transform = "rotateY(180deg)";
      this.isFlipped = true;
    }

    let flippedPairs = getFlippedPairs();
    if (flippedPairs.length == 2) {
      lockBoard = true;

      setTimeout(() => {
        checkPair(flippedPairs[0], flippedPairs[1]);
        flippedPairs = [];
        lockBoard = false;
      }, 800);
    }
  };

  UnFlip = () => {
    this.cardInner.style.transform = "rotateY(0deg)";
    this.isFlipped = false;
  };
}

const images = [
  "images/1.png",
  "images/2.png",
  "images/3.png",
  "images/4.png",
  "images/5.png",
  "images/6.png",
  "images/7.png",
  "images/8.png",
];
let cards = [];
let lockBoard = false;
let isGameOver = false;
let maxNoOfTurns = 15;
let currentWidth,
  currentHeight,
  noOfPairs,
  noOfTurns = 0;
const restartButton = document.getElementById("restart");

const generateGrid = (width, height) => {
  restartButton.style.display = "none";
  currentWidth = width;
  currentHeight = height;
  noOfTurns = maxNoOfTurns;
  //Reset card array and shuffle the images
  cards = [];
  isGameOver = false;
  noOfPairs = (width * height) / 2;
  const shuffledImages = [...images].sort(() => Math.random() - 0.5);

  //Set grid size for the container
  const gridContainer = document.getElementById("grid-container");
  gridContainer.style.gridTemplateColumns = `repeat(${width}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${height}, 1fr)`;

  //Generate cards array using the number of pairs needed
  for (let i = 0; i < noOfPairs; i++) {
    cards.push(new Card(i, shuffledImages[i]));
    cards.push(new Card(i, shuffledImages[i]));
  }

  //Shuffle cards then display on page
  const shuffledCards = [...cards].sort(() => Math.random() - 0.5);

  shuffledCards.forEach((element) => {
    element.Draw();
  });

  updateTurns();
};

const getFlippedPairs = () => {
  const flipped = [];
  cards.map((e) => {
    if (e.isFlipped) {
      flipped.push(e);
    }
  });
  return flipped;
};

const checkNoOfMatchedPairs = () => {
  let matched = 0;
  cards.map((e) => {
    if (e.isMatched) {
      matched++;
    }
  });
  matched = matched / 2;
  if (matched == noOfPairs) {
    isGameOver = true;
    const turnInfo = document.getElementById("game-info");
    turnInfo.innerHTML = `You win!`;
    restartButton.style.display = "block";
    //Win
  }
  return matched;
};

const updateTurns = () => {
  const turnInfo = document.getElementById("game-info");
  turnInfo.innerHTML = `Turns remaining: ${noOfTurns}`;
};

const checkPair = (card1, card2) => {
  if (card1.id === card2.id) {
    card1.isMatched = true;
    card1.isFlipped = false;
    card1.cardContainer.style.opacity = "0.5";

    card2.isMatched = true;
    card2.isFlipped = false;
    card2.cardContainer.style.opacity = "0.5";
  } else {
    card1.UnFlip();
    card2.UnFlip();
  }
  checkNoOfMatchedPairs();
  if (!isGameOver && noOfTurns > 0) {
    --noOfTurns;
    updateTurns();
  }
  if (noOfTurns == 0) {
    isGameOver = true;
    const turnInfo = document.getElementById("game-info");
    turnInfo.innerHTML = `You lose`;
    restartButton.style.display = "block";
    //Lose
  }
};

Restart = () => {
  //Removes all cards currently being rendered
  const container = document.getElementById("grid-container");
  while (container.firstChild) {
    container.removeChild(container.lastChild);
  }
  generateGrid(currentWidth, currentHeight);
};

restartButton.onclick = () => {
  Restart();
};
generateGrid(4, 4);

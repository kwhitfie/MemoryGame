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
    if (this.isFlipped) {
      this.UnFlip();
    } else {
      this.cardInner.style.transform = "rotateY(180deg)";
      this.isFlipped = true;
    }
  };

  UnFlip = () => {
    this.cardInner.style.transform = "rotateY(0deg)";
    this.isFlipped = false;
  };
}

const images = [
  "images/1.jpg",
  "images/2.jpg",
  "images/3.jpg",
  "images/4.jpg",
  "images/5.jpg",
  "images/6.jpg",
  "images/7.jpg",
  "images/8.jpg",
  "images/9.jpg",
  "images/10.jpg",
];
let cards = [];
let noOfPairs = 0;
let noOfTurns = 100;

const generateGrid = (width, height) => {
  //Reset card array and shuffle the images
  cards = [];
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

const getNoOfFlippedPairs = () => {
  const flipped = 0;
  cards.map((e) => {
    if (e.isFlipped) {
      flipped++;
    }
  });
  return flipped;
};

const checkNoOfMatchedPairs = () => {
  const matched = 0;
  cards.map((e) => {
    if (e.isMatched) {
      matched++;
    }
  });
  if (matched === noOfPairs) {
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
    card2.isMatched = true;
  } else {
    card1.UnFlip();
    card2.UnFlip();
  }
  if (noOfTurns > 0) {
    noOfPairs--;
    updateTurns();
  } else {
    //Lose
  }
};

generateGrid(4, 4);

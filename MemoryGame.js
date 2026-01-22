class Card {
  constructor(id, image) {
    this.isMatched = false;
    this.isFlipped = false;
    this.id = id;

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
    this.cardBack.style.background = `url(${image})`;
    this.cardBack.style.backgroundRepeat = "no-repeat";
    this.cardBack.style.backgroundSize = "cover";

    this.cardContainer.appendChild(this.cardInner);
    this.cardInner.appendChild(this.cardFront);
    this.cardInner.appendChild(this.cardBack);
    document.getElementById("grid-container").appendChild(this.cardContainer);
    this.cardContainer.addEventListener("click", this.Flip);
  }

  Flip = () => {
    if (this.isFlipped) {
      this.cardInner.style.transform = "rotateY(180deg)";
      this.isFlipped = true;
    } else {
      this.cardInner.style.transform = "rotateY(-180deg)";
      this.isFlipped = false;
    }
  };
}

const generateGrid = (width, height) => {
  for (let column = 0; column < height; column++) {
    for (let row = 0; row < width; row++) {
      const card = new Card(1, "images/blah.jpg");
    }
  }
};

generateGrid(4, 4);

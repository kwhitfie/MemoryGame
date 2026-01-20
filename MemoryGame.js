class Card {
  constructor(id, image) {
    this.isMatched = false;
    this.isFlipped = false;
    this.id = id;

    // Makes nested html elements that should be structured like so:

    // div class="card-container">
    //     <div class="card-inner">
    //       <div class="card-front"></div>
    //       <div class="card-back"></div>
    //     </div>
    //   </div>

    this.cardContainer = document.createElement("div");
    this.cardContainer.setAttribute("class", "card-container");

    this.cardInner = document.createElement("div");
    this.cardInner.setAttribute("class", "card-inner");

    this.cardFront = document.createElement("div");
    this.cardFront.setAttribute("class", "card-front");

    this.cardBack = document.createElement("div");
    this.cardBack.setAttribute("class", "card-back");
    this.img = document.createElement("img");
    this.img.setAttribute("src", image);
    this.img.setAttribute("class", "card-back__img");

    this.cardContainer.appendChild(this.cardInner);
    this.cardInner.appendChild(this.cardFront);
    this.cardInner.appendChild(this.cardBack);
    this.cardBack.appendChild(this.img);
    document.getElementById("grid-container").appendChild(this.cardContainer);
  }
}

const testCard = new Card(1, "images/bleh.jpg");

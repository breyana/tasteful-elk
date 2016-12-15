function singleCard () {

}

function threeCards () {

}

function fiveCards () {

}

function shuffleDeck(array) {
  var m = array.length, t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}

var shuffled = shuffleDeck(cardData)
//contains the random numbers generated

// function () {
//   var squares = [];
//   var randomNumbers = []
//   //matches randomNumbers with index numbers in the cardData array
//   // map??
//   return squares //changes with the number of cards in the index
// }






// var backOfCard = "<img src=\"./CardImages/cardback.jpg\" width=\"70px\">"
// var revealedCard = cardData[0].cardImage
//
// var


function changeImage() {
  var one_card = document.getElementById("position-2")
  if (one_card.firstChild.nodeValue == "./CardImages/cardback.jpg") {
    one_card.firstChild.nodeValue = "./CardImages/cups_2.jpg"
  } else {
    one_card.firstChild.nodeValue = "./CardImages/cardback.jpg"
  }


      //  if (document.getElementById("position-2").src == "./CardImages/cardback.jpg")
      //  {
      //     // var surfacedCard = cardData.map(function(a) {return a.cardImage;});
      //     // use cardData[0].cardImage instead
      //     document.getElementById('position-2').src = "./CardImages/cups_2.jpg"
      //  }
      //  else
      //  {
      //     document.getElementById("position-2").src = "./CardImages/cardback.jpg";
      //  }
   }

var el = document.getElementById("tarotgrid");
el.addEventListener("click", changeImage, false)

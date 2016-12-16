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

function flipCard(index, shuffled, position) {
  return function() {
    position.innerHTML = `<img src="./CardImages/${shuffled[index]}.jpg" width="70px" />`
    var cardDescriptionBox = document.createElement('div')
    cardDescriptionBox.innerHTML = cardinfo[shuffled[index]]
    document.getElementById('description').appendChild(cardDescriptionBox)
    document.position.removeEventListener("click", flipCard(index, shuffled, position), false)
  }
} //this function takes the values specified in the other functions

function dealThree() {
  var shuffled = shuffleDeck(cardImages)
  document.getElementById('description').innerHTML = ""
  for (var index = 1; index < 10; index++) {
    var position = document.getElementById('position-' + index)
    if (index >= 4) {
      position.innerHTML = ''
    } else {
      position.innerHTML = '<img src="./CardImages/cardback.jpg" width="70px" />'
      position.addEventListener("click", flipCard(index, shuffled, position), false)
    }
  }
}

function dealFive() {
  document.getElementById('description').innerHTML = ""
  // var elem = document.getElementsByClassName("square")
  // elem.innerHTML = ""
  var shuffled = shuffleDeck(cardImages)
  for (var index = 1; index < 10; index++) {
    var position = document.getElementById('position-' + index)
    position.removeEventListener("click", flipCard(index, shuffled, position))
    if (index === 1 || index === 3 || index === 7 || index === 9) {
      position.innerHTML = ''
    } else {
    position.innerHTML = '<img src="./CardImages/cardback.jpg" width="70px" />'
    position.addEventListener("click", flipCard(index, shuffled, position), false)
  }
}
}

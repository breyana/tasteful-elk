function singleCard () {

}

function threeCards () {

}

function fiveCards () {

}


function changeImage() {

       if (document.getElementById("position-1").src == ".CardImages/cardback.jpg")
       {
          var surfacedCard = cardData.map(function(a) {return a.cardImage;});
          document.getElementById('position-1').src = surfacedCard;
       }
       else
       {
          document.getElementById("position-1").src == ".CardImages/cardback.jpg";
       }
   }

function singleCard () {

}

function threeCards () {

}

function fiveCards () {

}


function changeImage() {

       if (document.getElementById("imgClickAndChange").src == ".CardImages/cardback.jpg")
       {
          var surfacedCard = cardData.map(function(a) {return a.cardImage;});
          document.getElementById('position-1').src = surfacedCard;
       }
       else
       {
          document.getElementById("imgClickAndChange").src == ".CardImages/cardback.jpg";
       }
   }

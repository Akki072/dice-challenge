
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var randomNumber2 = Math.floor(Math.random() * 6) + 1;

  var images1 = "images/dice" + randomNumber1 + ".png";
  var images2 = "images/dice" + randomNumber2 + ".png";

  var photo1 = document.querySelectorAll("img")[0];
  var photo2 = document.querySelectorAll("img")[1];

  photo1.setAttribute("src" , images1);
  photo2.setAttribute("src" , images2);
if(randomNumber1 > randomNumber2)
{
  document.querySelector("h1").innerHTML = "Player 1 wins 🚩";
}
else if(randomNumber2 > randomNumber1)
{
  document.querySelector("h1").innerHTML = "Player 2 wins🚩";
}
else{
  document.querySelector("h1").innerHTML = "Draw!";
}

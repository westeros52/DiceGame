var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var emoji = String.fromCodePoint(128681)

function refreshPage() {
    location.reload(); 
}
document.querySelector("img.img1").setAttribute("src","images/dice"+randomNumber1+".png");
document.querySelector("img.img2").setAttribute("src","images/dice"+randomNumber2+".png");

if (randomNumber1==randomNumber2){
    document.querySelector("h1").innerHTML="Draw!";
}
else if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML=emoji+"Player 1 won!";
}
else{
    document.querySelector("h1").innerHTML="Player 2 won!"+emoji;
}


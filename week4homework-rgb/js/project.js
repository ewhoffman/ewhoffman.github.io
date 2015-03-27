function choiceRGB(){

// var enteredRGB = document.getElementById("red,green,blue").value;

var red = document.getElementById("red").value;
var green = document.getElementById("green").value;
var blue = document.getElementById("blue").value;
var rgb = "rgb(" + red + "," + green + "," + blue + ")";

// document.getElementById("red");
// document.getElementById("green");
// document.getElementById("blue");

// var res= enteredRGB.concat(" + red +", " + green +", " + blue +");

document.body.style.backgroundColor = rgb;
// document.getElementById("colorbutton").style.backgroundColor = rgb;
document.getElementById("colorfultext").innerHTML = rgb;

// document.write("colorfultext"). choiceRGB;

}
document.getElementById("colorbutton").onclick = choiceRGB;
// document.getElementById("colorbutton").write(+value+).onclick
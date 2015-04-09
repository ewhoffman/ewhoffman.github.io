var total = 0;
// var red;

document.getElementById("a10").onclick = addTen;

function addTen(){
	total = total + 10;
	document.getElementById("out").innerHTML = total;
}

document.getElementById("a20").onclick = add20;

function add20() {
	total = total + 20;
	document.getElementById("out").innerHTML = total;
}

document.getElementById("a30").onclick = add30;

function add30(){
	total = total + 30;
	document.getElementById("out").innerHTML = total;
}

document.getElementById("red").onclick = changeRed;

function changeRed(){
	document.getElementById("out").style.backgroundColor = "red";
}

document.getElementById("out").onclick = changeWhite;

function changeWhite(){
	document.getElementById("out").style.backgroundColor = "white";
	total = 0
	document.getElementById("out").innerHTML = total;
}

document.getElementById("blue").onclick = changeBlue;

function changeBlue(){
	document.getElementById("out").style.backgroundColor = "blue";
}
document.getElementById("n10").onclick = minus10;

function minus10(){
	total = total - 10;
	document.getElementById("out").innerHTML = total;
}

document.getElementById("n20").onclick = minus20;

function minus20(){
	total = total - 20;
	document.getElementById("out").innerHTML = total;
}

document.getElementById("n30").onclick = minus30;

function minus30() {
	total = total - 30;
	document.getElementById("out").innerHTML = total;
}


// var red = document.getElementById.("red").onclick.document.style.backgroundColor = red 

// document.getElementById("red").onclick = red

// function red() {
// 	document."out".style.backgroundColor = red
// }
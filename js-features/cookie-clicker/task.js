let clickerCounter = document.getElementById("clicker__counter");
let clickerCounterNumber = +clickerCounter.textContent; // получим число кликов

let clickerCookie = document.getElementById("cookie");
let sizeRule = 0;

function changeSizePlus() {

	clickerCookie.width += 20;
	clickerCookie.height += 20;
	return sizeRule = 1;

}

function changeSizeMinus() {

	clickerCookie.width -= 20;
	clickerCookie.height -= 20;
	return sizeRule = 0;

}

clickerCookie.onclick = function() {
	if (sizeRule == 0) {
		changeSizePlus();
	} else changeSizeMinus();

	clickerCounterNumber++;
	return clickerCounter.textContent = clickerCounterNumber;
}
function changeImage(event) {
	event = event || window.event;
	var  targetElement = event.target || event.srcElement;
	if (targetElement.tagName == "IMG") {
	document.getElementById("mainImage").src = targetElement.getAttribute("src");
	}
}



var countItems = 0;
var money = 0;
function addToCart() {
	var increaseItem = document.body.querySelectorAll("#count");
	var cart = document.body.querySelector(".money");
	money += Math.floor(Math.random()*(400-250)+250);
	countItems++;
	increaseItem[0].innerText = countItems;
	cart.innerText = 'Bag' + money + '';
}
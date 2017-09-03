var basket = localStorage.basket ? JSON.parse(localStorage.basket) : [];
var basketWrapper = document.querySelector(".cart");

function getProductHTML(product, index) {
	return '<div class="item bag-item">'+
		'<figure>'+
			'<div class="img-container bag-img">'+
				'<a href="item.html"><img class="item-photo" src="img/catalog/' + product.source + '"></a>'+
				'<p class="view-item">View item</p>'+
			'</div>'+
			'<figcaption>' + product.name +
				'<span class="price-bag">&pound;' + product.price + '</span>'+
				'<p class="color">Color: <span>' + product.color + '</span></p>'+
				'<p class="size">Size: <span>' + product.size + '</span></p>'+
				'<p class="quantity">Quantity: <span>' + product.quantity + '</span></p>'+
				'<button type="button" data-product-index="' + index + '" class="remove-item-btn"> Remove item</button>'+
			'</figcaption>'+
		'</figure>'+
	'</div>'
}

function bindRemoveItemClick() {
	var buttons = document.querySelectorAll('.remove-item-btn');

	for (var i = 0; i < buttons.length; i++) {
		buttons[i].addEventListener('click', function(event) {
			var index = event.target.getAttribute("data-product-index");
			var basketProduct = basket[index];

			if (basketProduct.quantity > 1) {
				// decrease quantity
				basketProduct.quantity--;
				localStorage.basket = JSON.stringify(basket);
			} else {
				// remove product
				basket.splice(index, 1);
				localStorage.basket = JSON.stringify(basket);
			}

			// re-render basket items
			init();
		});
	}
}

function clearBag() {
	basket = [];
	localStorage.basket = JSON.stringify(basket);

	init();
}

function bindClearBag() {
	var clearBtn = document.querySelector('.clear-bag-btn');

	clearBtn.addEventListener('click', function(event) {
		clearBag();
	});
}

function bindOrderCompleteBtn() {
	var completeOrderBtn = document.querySelector('.buy-bag-btn');

	completeOrderBtn.addEventListener('click', function(event) {
		clearBag();

		document.querySelector('#emptyBagMsg').style.display = 'none';				
		document.querySelector('#orderCompleteMsg').style.display = 'block';		
	});
}

function renderHTML() {
	basketWrapper.innerHTML = '';

	for (var i = 0; i<basket.length; i++) {
		basketWrapper.innerHTML += getProductHTML(basket[i], i);
	}
}

function init() {
	renderHTML();
	bindRemoveItemClick();
	bindClearBag();	
	bindOrderCompleteBtn();
	bagCounter();
}

// initialization on page load
init();
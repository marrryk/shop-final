var ITEMS = [
	{
		id: 1,
		name: 'Only Skinny Jeans',
		price: 65.50,
		source: '1.jpg',
		thumbnails: ['1.jpg', '1.1.jpg', '1.2.jpg'],
		quantity: 1,
		color: '',
		size: ''
	},
	{
		id: 2,
		name: 'Neck Knitted Jumper',
		price: 76.25,
		source: '2.jpg',
		thumbnails: ['2.jpg', '2.1.jpg', '2.2.jpg'],
		quantity: 1,
		color: '',
		size: ''
	}
];

var basket = JSON.parse(localStorage.basket);
    basket.push(product);
    localStorage.basket = JSON.stringify(basket);

    document.querySelector('.item-block').dataset.product = ITEMS;
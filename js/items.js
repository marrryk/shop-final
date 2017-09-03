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
	cart.innerText = '£' + money + '.00';
}


// var bagStorage =  localStorage.setItem('ITEMS',[
// 	{
// 		id: 1,
// 		name: 'Only Skinny Jeans',
// 		price: 65.50,
// 		source: '1.jpg',
// 		thumbnails: ['1.jpg', '1.1.jpg', '1.2.jpg'],
// 		quantity: 1,
// 		color: '',
// 		size: ''
// 	},
// 	{
// 		id: 2,
// 		name: 'Neck Knitted Jumper',
// 		price: 76.25,
// 		source: '2.jpg',
// 		thumbnails: ['2.jpg', '2.1.jpg', '2.2.jpg'],
// 		quantity: 1,
// 		color: '',
// 		size: ''
// 	}
// ]);
// window.ITEMS = [{
//     "id": "1",
//     "name": "Only Skinny Jeans",
//     "price": "65.50",
//     "source": "1.jpg",
//     "thumbnails": ["1.jpg", "1.1.jpg", "1.2.jpg"],
//     "quantity": "1",
//     "color": "",
//     "size": ""
//    },
//    {
//     "id": "2",
//     "name": "Neck Knitted Jumper",
//     "price": "76.25",
//     "source": "2.jpg",
//     "thumbnails": ["2.jpg", "2.1.jpg", "2.2.jpg"],
//     "quantity": "1",
//     "color": "",
//     "size": ""
//    }];
  
//    var basket = JSON.parse(localStorage.basket);
//    basket.push(product);
//    localStorage.basket = JSON.stringify(basket);

//    document.querySelector('.item-block').dataset.product = JSON.stringify(items[0]);
//    var product = JSON.parse(document.querySelector('.item-block').getAttribute('data-product'));
//    document.querySelector('.item-block').innerText = product;



// (function () {
//     setItemView(getItem());

//     function getItem() {
//         var params = window.location.hash;
//         if (params.indexOf('id=') !== -1) {
//             var id = parseInt(params.substring(params.indexOf('id=') + 3));
//             for (var i = 0; i < ITEMS.length; i++) {
//                 if (ITEMS[i].id === id) {
//                     setProperties(ITEMS[i]);
//                     return ITEMS[i];
//                 }
//             }
//         }
//     }

//     function setProperties(item) {
//         var properties = document.querySelectorAll('.checked-btn');
//         for(var i = 0; i < properties.length; i += 1) {
//             if (properties[i].classList.contains('size-btn')) {
//                 item.size = properties[i].value;
//             }

//             if (properties[i].classList.contains('color-btn')) {
//                 item.color = properties[i].value;
//             }
//         }
//     }

//     function setItemView(item) {
//         if (item !== undefined) {

//             document.querySelector('#mainImage').setAttribute('src', 'img/items/' + item.source);
//             var thumbnails = document.querySelectorAll('.imgStyle');
//             for(var i = 0; i < thumbnails.length; i += 1) {
//                 if (item.thumbnails.length > i) {
//                     thumbnails[i].setAttribute('src', 'img/items/' + item.thumbnails[i]);
//                 } else {
//                     thumbnails[i].parentNode.removeChild(thumbnails[i]);
//                 }
//             }
//             document.querySelector('#name-item').textContent = item.name;
//             document.querySelector('.price-item').textContent = String.fromCharCode(163) + item.price;
//         } else {
//             var itemDetails = document.querySelector('.item-block');
//             var notFoundMessage = document.createElement('h1');
//             notFoundMessage.textContent = "Item Not Found";
//             notFoundMessage.classList.add('not-found-message');
//             itemDetails.innerHTML = '';
//             itemDetails.appendChild(notFoundMessage);
//         }

//         // window.updateTotals(window.bagStorage.totalCost, window.bagStorage.totalCount);
//     }

    // var imagesBar = document.querySelector('.gallery-switcher');
    // var fullImage = document.querySelector('#mainImage');

    // if (imagesBar) {
    //     imagesBar.addEventListener('click', function (e) {
    //         if (e.target.classList.contains('imgStyle')) {
    //         fullImage.style.opacity = 0;
            
            // setTimeout(function() {
                 
            //     var thumbnail = e.target;
            //     var allThumbnails = document.querySelectorAll('.imgStyle');
            //     removeFilters(allThumbnails, 'active-thumbnail');
            //     thumbnail.classList.add('active-thumbnail');
            //     if (thumbnail.getAttribute('src')) {
            //         var source = thumbnail.getAttribute('src');
                    
            //         fullImage.setAttribute('src', source);
            //             fullImage.style.opacity = 1;
            //     }
            
            // }, 1000)
    //         }
           
    //     });
    // }



// var buttonsChecked = document.querySelector("#buttons-check");
// buttonsChecked.addEventListener("submit", function(e) {
//     e.preventDefault();
//     var name = document.querySelector("#name-item").textContent;
//     var price = document.querySelector("#price-item").textContent;
//     var i, size, color;

//     Array.prototype.every.call(this.elements.size, function(element) {

//         if (element.checked) {
//             size = element.value;
//             return false;
//         }
//         return true;
//     });

//     Array.prototype.every.call(this.elements.color, function(element) {

//         if (element.checked) {
//             color = element.value;
//             return false;
//         }
//         return true;
//     });
//     console.log(size);
function changeImage(event) {
	event = event || window.event;
	var  targetElement = event.target || event.srcElement;
	if (targetElement.tagName == "IMG") {
	document.getElementById("mainImage").src = targetElement.getAttribute("src");
	}
}



// var countItems = 0;
// var money = 0;
// function addToCart() {
// 	var increaseItem = document.body.querySelectorAll("#count");
// 	var cart = document.body.querySelector(".money");
// 	money += Math.floor(Math.random()*(400-250)+250);
// 	countItems++;
// 	increaseItem[0].innerText = countItems;
// 	cart.innerText = 'Bag' + money + '';
// }


window.ITEMS = [
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




(function () {
    setItemView(getItem());

    function getItem() {
        var params = window.location.hash;
        if (params.indexOf('id=') !== -1) {
            var id = parseInt(params.substring(params.indexOf('id=') + 3));
            for (var i = 0; i < ITEMS.length; i++) {
                if (ITEMS[i].id === id) {
                    setProperties(ITEMS[i]);
                    return ITEMS[i];
                }
            }
        }
    }

    function setProperties(item) {
        var properties = document.querySelectorAll('.checked-btn');
        for(var i = 0; i < properties.length; i += 1) {
            if (properties[i].classList.contains('size-btn')) {
                item.size = properties[i].value;
            }

            if (properties[i].classList.contains('color-btn')) {
                item.color = properties[i].value;
            }
        }
    }

    function setItemView(item) {
        if (item !== undefined) {

            document.querySelector('#mainImage').setAttribute('src', 'img/items/' + item.source);
            var thumbnails = document.querySelectorAll('.imgStyle');
            for(var i = 0; i < thumbnails.length; i += 1) {
                if (item.thumbnails.length > i) {
                    thumbnails[i].setAttribute('src', 'img/items/' + item.thumbnails[i]);
                } else {
                    thumbnails[i].parentNode.removeChild(thumbnails[i]);
                }
            }
            document.querySelector('.name-item').textContent = item.name;
            document.querySelector('.price-item').textContent = String.fromCharCode(163) + item.price;
        } else {
            var itemDetails = document.querySelector('.item-block');
            var notFoundMessage = document.createElement('h1');
            notFoundMessage.textContent = "Item Not Found";
            notFoundMessage.classList.add('not-found-message');
            itemDetails.innerHTML = '';
            itemDetails.appendChild(notFoundMessage);
        }

        window.updateTotals(window.bagStorage.totalCost, window.bagStorage.totalCount);
    }

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

    // function removeFilters(pictureSet, filterClass) {
    //     for(var i = 0; i < pictureSet.length; i += 1) {
    //         pictureSet[i].classList.remove(filterClass);
    //     }
    // }

    // var buttonsContainer = document.querySelector('.item-detailed-description-container');
    // if (buttonsContainer) {
    //     buttonsContainer.addEventListener('click', function (e) {
    //         if (e.target.classList.contains('property-button')) {
    //             changeHighligtedButton(e.target);
    //         }
    //     });
    // }

    // function changeHighligtedButton(target) {
    //     var buttons = target.parentNode.querySelectorAll('.property-button');
    //     for (var i = 0; i < buttons.length; i += 1) {
    //         buttons[i].classList.remove('highligted-property-button');
    //     }

    //     target.classList.add('highligted-property-button');
    // }

    // var addItemButton = document.querySelector('#add-item-button');

    // if(addItemButton) {
    //     addItemButton.addEventListener('click', function () {

    //         window.bagStorage.addItemToBag(cloneObject(getItem()));
    //         window.updateTotals(window.bagStorage.totalCost, window.bagStorage.totalCount);
    //     });
    // }

    // function cloneObject(object) {
    //     var clone = {};
    //     var properties = Object.getOwnPropertyNames(object);
    //     for(var i = 0; i < properties.length; i += 1) {
    //         clone[properties[i]] = object[properties[i]];
    //     }
    //     return clone;
    // }

})();


var cart = document.querySelector('.items-add-in-bag');






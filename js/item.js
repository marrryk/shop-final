function init() {
  var product = getProduct(); 
  setDataItemObject(product);

  bagCounter();
}

function getProduct() {
  var productId = window.location.hash.split("=")[1];
  return window.products.filter(function(product) {
    return product.id == productId;
  })[0];
}

function setDataItemObject(item) {
  var itemBlock = document.querySelector('.item-block');
  itemBlock.dataset.product = JSON.stringify(item);
}

function chooseColor() {
  var itemBlock = document.querySelector('.item-block');
  var itemColor = document.querySelectorAll('.colorInput');
  for (var i = 0; i < itemColor.length; i++) {
     itemColor[i].addEventListener('click', function(event) {
       var itemData = JSON.parse(itemBlock.getAttribute('data-product'));
       itemData.color = event.target.value;
       itemBlock.dataset.product = JSON.stringify(itemData);
     });
  }
}

function chooseSize() {
  var itemBlock = document.querySelector('.item-block');
  var itemSize = document.querySelectorAll('.sizeInput');
  for (var i = 0; i < itemSize.length; i++) {
    itemSize[i].addEventListener('click', function(event) {
      var itemData = JSON.parse(itemBlock.getAttribute('data-product'));
      itemData.size = event.target.value;
      itemBlock.dataset.product = JSON.stringify(itemData);
    });
  }
}

function addToBag() {
  var itemBlock = document.querySelector('.item-block');
  var addToBag = document.querySelector('.add-to-bag');
  var bagData = [];

  addToBag.addEventListener('click', function (event) {
    if (localStorage.basket) {
      bagData = JSON.parse(localStorage.basket);
    }

    var product = JSON.parse(itemBlock.getAttribute('data-product'));
    var basketProduct = bagData.filter(function(bagProduct) {
      return bagProduct.id == product.id
        && bagProduct.size == product.size
        && bagProduct.color == product.color;
    })[0];

    if (product && basketProduct) {
      // product already exists in basket
      basketProduct.quantity++;
      localStorage.basket = JSON.stringify(bagData);
    }
    else {
      // new product
      bagData.push(product);
      localStorage.basket = JSON.stringify(bagData);
    }

    bagCounter();    
  });
}

function changeImage(event) {
  event = event || window.event;
  var  targetElement = event.target || event.srcElement;
  if (targetElement.tagName == "IMG") {
    document.getElementById("mainImage").src = targetElement.getAttribute("src");
  }
}

function loadProductInfo() {
  var product = getProduct();
  var mainImg = document.querySelector('#mainImage');
  var thumbnailsWrapper = document.querySelector('#thumbnailsWrapper');
  var productName = document.querySelector('#name-item');
  var price = document.querySelector('#price-item');

  mainImg.src = 'img/items/' + product.source;
  for (var i=0; i<product.thumbnails.length; i++) {
    thumbnailsWrapper.innerHTML += '<div><img src="img/items/' + product.thumbnails[i] + '" alt="" class="imgStyle"></div>'
  }

  productName.innerHTML = product.name;
  price.innerHTML += product.price;
}


// var countItems = 0;
// var money = 0;
// function addToCart() {
//   var increaseItem = document.body.querySelectorAll("#count");
//   var cart = document.body.querySelector(".money");
//   money += Math.floor(Math.random()*(400-250)+250);
//   countItems++;
//   increaseItem[0].innerText = countItems;
//   cart.innerText = '?' + money + '.00';
// }


init();
loadProductInfo();
chooseColor();
chooseSize();
addToBag();

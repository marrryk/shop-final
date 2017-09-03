function loadJSON(callback) {
  // Get data from json file
  var xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.open('GET', './js/products.json', true);
  xobj.onreadystatechange = function () {
    if (xobj.readyState == 4 && xobj.status == "200") {
      // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
      callback(xobj.responseText);
    }
  };
  xobj.send(null);
}


function init() {
  loadJSON(function(response) {
    console.log(response);
    // Parse JSON string into object
    var actual_JSON = JSON.parse(response);
    setDataItemObject(actual_JSON[0]);
  });
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
    if(JSON.parse(itemBlock.getAttribute('data-product'))) {
      bagData.push(JSON.parse(itemBlock.getAttribute('data-product')));
      localStorage.basket = JSON.stringify(bagData);
      bagCounter();
    }
  });
}

function bagCounter() {
  var itemBag = document.querySelector('.bag');
  var moneyItem = itemBag.querySelector('#count');
  var bagItems = JSON.parse(localStorage.basket);
  var sumPrice = 0;
  for (var i = 0; i < bagItems.length; i++) {
    sumPrice = +bagItems[i].price + sumPrice;
  }
  moneyItem.innerText = sumPrice.toFixed(2);
}

// function changeImage(event) {
//   event = event || window.event;
//   var  targetElement = event.target || event.srcElement;
//   if (targetElement.tagName == "IMG") {
//     document.getElementById("mainImage").src = targetElement.getAttribute("src");
//   }
// }



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
chooseColor();
chooseSize();
addToBag();
bagCounter();
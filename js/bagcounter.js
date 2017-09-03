function bagCounter() {
  var itemBag = document.querySelector(".bag");
  var moneyItem = itemBag.querySelector(".money");
  var count = itemBag.querySelector("#count");
  var emptyBagMessage = document.querySelector("#emptyBagMsg");

  if (localStorage.basket) {
    var bagItems = JSON.parse(localStorage.basket);
    var sumPrice = 0;
    var sumQuantity = 0;

    for (var i = 0; i < bagItems.length; i++) {
      sumPrice = (+bagItems[i].price + sumPrice) * bagItems[i].quantity;
      sumQuantity = +bagItems[i].quantity + sumQuantity;
    }

    moneyItem.innerText = sumPrice.toFixed(2);
    count.innerText = sumQuantity;

    if (bagItems && bagItems.length == 0 && emptyBagMessage) {
      // basket is empty
      emptyBagMessage.style.display = "block";
    }
  }
}

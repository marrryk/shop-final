(function() {
  // elements
  var menus = document.querySelectorAll(".menu-filter-group");
  var curValue = document.querySelector(".menu-filter-current-value");
  var menuOptions = document.querySelector(".menu-filter-options");

  // handle dropdown open/close for Mobile/Tablet
  curValue.addEventListener("click", function(e) {
    var isOpen = menuOptions.className.indexOf("is-open") > -1;
    if (isOpen) {
      menuOptions.className = menuOptions.className.replace("is-open", "");
    } else {
      menuOptions.className += " is-open";
    }
  });

  // handle dropdown item click
  menus.forEach(function(item) {
    item.addEventListener("click", function(e) {
      var target = e.target;
      var itemText = target.innerHTML.trim();
      var activeItems = item.querySelectorAll(".active-filter");

      // remove all active items for .menu-group
      activeItems.forEach(function(item) {
        item.className = "";
      });

      // set active item for .menu-group
      target.className += "active-filter";

      // update concatenated string with latest selections
      curValue.innerHTML = getSelectionString();
    });
  });

  // set initial value on page load
  curValue.innerHTML = getSelectionString();

  function getSelectionString() {
    var arrElements = Array.prototype.slice.call(
      document.querySelectorAll(".menu-filter-group .active-filter")
    );
    var arrStrings = arrElements.map(function(el) {
      return el.innerHTML;
    });
    return arrStrings.join(", ");
  }
})();
bagCounter();

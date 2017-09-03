window.addEventListener("load", function () {
  var isSearchFieldInputOpened = false;
  var isOpenMenu = false;
  var menuBtn = document.getElementById("menuBtn");

  menuBtn.addEventListener("click", function () {
    var menu = document.getElementsByClassName("mobile-visible-menu")[0];
    if (isOpenMenu) {
      menu.className = "mobile-visible-menu";
      menuBtn.className = menuBtn.className.split(" ")[0] + " menu-btn-closed";
    } else {
      menu.className += " active-menu";
      menuBtn.className = menuBtn.className.split(" ")[0] + " menu-btn-opened";
    }
    isOpenMenu = !isOpenMenu;
  });

  var searchIcon = document.querySelector(".search-icon");
  searchIcon.addEventListener("click", () => {
    var searchFieldInput = document.querySelector(".search input");
    // console.log(searchFieldInput.classList);
    if (isSearchFieldInputOpened) {
      searchFieldInput.className = "";
    } else {
      searchFieldInput.className = "search-input-field";
    }

    isSearchFieldInputOpened = !isSearchFieldInputOpened;
  });
});

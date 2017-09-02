window.addEventListener('load', () => {
  
    let isSearchFieldInputOpened = false;
    let isOpenMenu = false;
    let menuBtn = document.getElementById('menuBtn');
  
    menuBtn.addEventListener('click', () => {
      let menu = document.getElementsByClassName('mobile-visible-menu')[0];
      if (isOpenMenu) {
        menu.className = 'mobile-visible-menu';
        menuBtn.className = menuBtn.className.split(' ')[0] + ' menu-btn-closed';
      } else {
        menu.className += ' active-menu';
        menuBtn.className = menuBtn.className.split(' ')[0] + ' menu-btn-opened'
      }
      isOpenMenu = !isOpenMenu;
    });
  
  
    let magnifier = document.querySelector('.search-icon');
    magnifier.addEventListener('click', () => {
      let searchFieldInput = document.querySelector('.search input');
      // console.log(searchFieldInput.classList);
      if (isSearchFieldInputOpened) {
        searchFieldInput.className = '';
      } else {
        searchFieldInput.className = 'search-input-field';
      }
  
      isSearchFieldInputOpened = !isSearchFieldInputOpened;
    });
  });
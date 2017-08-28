var menuBtn = document.getElementById('menuBtn');
var isOpenMenu = false;
menuBtn.addEventListener('click', function () {
  var menu = document.getElementsByClassName('mobile-group')[0];
  if (isOpenMenu) {
    menu.className = 'mobile-group';
    menuBtn.className = menuBtn.className.split(' ')[0] + ' menu-btn-closed';
  } else {
    menu.className += ' active-menu';
    menuBtn.className = menuBtn.className.split(' ')[0] + ' menu-btn-opened'
  }
  isOpenMenu = !isOpenMenu;
});

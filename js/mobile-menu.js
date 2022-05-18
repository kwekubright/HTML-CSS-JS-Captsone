// onclick humburger menu add .mobile-menu class to element with the class collapse
// get the humburger menu
const humburger = document.querySelector('.navbar-toggler');
// add click event to humburger menu
humburger.addEventListener('click', () => {
  // get the element with the class collapse
  const collapse = document.querySelector('.collapse');
  // add class mobile-menu to the element with the class collapse
  collapse.classList.toggle('mobile-nav');
}, false);

// get the before of the element with class menu-nav
const close = document.querySelector('.close-navbar-mobile');
// add click event to the before of the element with class menu-nav
close.addEventListener('click', () => {
  // get the element with the class collapse
  const collapse = document.querySelector('.collapse');
  // add class mobile-menu to the element with the class collapse
  collapse.classList.toggle('mobile-nav');
}, false);
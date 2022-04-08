const btnHamburgerOpen = document.querySelector('.fas.fa-bars');

const btnHamburgerClose = document.querySelector('.close');

const hamburgerMenu = document.querySelector('.hamburger-menu');

console.log('hamburger----->', hamburgerMenu);

btnHamburgerOpen.addEventListener("click", function(){
  const domHamburgerMenu = document.querySelector('.hamburger-menu');
  domHamburgerMenu.classList.add('active');
});

btnHamburgerClose.addEventListener("click", function(){
  const domHamburgerMenu = document.querySelector('.hamburger-menu');
  domHamburgerMenu.classList.remove('active');
});


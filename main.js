const btnHamburgerOpen = document.querySelector('.fas.fa-bars');

const btnHamburgerClose = document.querySelector('.close');

const hamburgerMenu = document.querySelector('.hamburger-menu');

console.log('hamburger----->', hamburgerMenu);

btnHamburgerOpen.addEventListener("click", function(){
  hamburgerMenu.style.display = "block";
});


btnHamburgerClose.addEventListener("click", function(){
  hamburgerMenu.style.display = "none";
})
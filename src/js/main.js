import '../scss/index.scss';

toogleMobileMenu();

function toogleMobileMenu() {
  const burger = document.getElementById('burger');

  const handleBurger = () => {
    document.body.classList.toggle('menu-active');
  };

  burger.addEventListener('click', handleBurger);
}

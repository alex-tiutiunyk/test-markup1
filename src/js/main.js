import '../scss/index.scss';

isMobileMenu();

function isMobileMenu() {
  const burger = document.getElementById('burger');

  const handleBurger = () => {
    document.body.classList.toggle('menu-active');
  };

  burger.addEventListener('click', handleBurger);
}

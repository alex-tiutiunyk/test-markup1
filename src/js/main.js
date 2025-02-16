import '../scss/index.scss';

isMobileMenu();

function isMobileMenu() {
  const burger = document.getElementById('burger');

  const handleBurger = () => {
    document.body.classList.toggle('menu-active');
  };

  const menuClose = () => {
    document.body.classList.remove('menu-active');
  };

  burger.addEventListener('click', handleBurger);
  window.onresize = menuClose;
}

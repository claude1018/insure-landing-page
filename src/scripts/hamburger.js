import iconClose from '../images/icon-close.svg';
import iconHamburger from '../images/icon-hamburger.svg';

const hamburger = document.getElementById('hamburger-icon');
const menu = document.getElementById('mobile-menu');
const content = document.getElementById('content');
const footer = document.getElementById('footer');
let isClicked = false;
export const hamburgerEvent = () => {
  hamburger.addEventListener('click', () => {
    if (!isClicked) {
      isClicked = true;
      menu.classList.remove('hide');
      content.classList.add('hide');
      footer.classList.add('hide');
      hamburger.src = iconClose;
    } else {
      isClicked = false;
      menu.classList.add('hide');
      content.classList.remove('hide');
      footer.classList.remove('hide');
      hamburger.src = iconHamburger;
    }
  });
};

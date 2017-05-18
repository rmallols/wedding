import menuHtml from './menu.html';
import './menu.less';

let isMenuVisible = false;

export function bootMenu(rootNode) {
  rootNode.innerHTML = menuHtml;
  manageMenuVisibility(rootNode);
}

function manageMenuVisibility(rootNode) {
    let innerMenuNode = rootNode.querySelector('[data-inner-menu]');
    let menuToggleNode = rootNode.querySelector('[data-menu-toggle]');
    menuToggleNode.addEventListener('click', () => {
       isMenuVisible = !isMenuVisible;
       innerMenuNode.classList.toggle('is-visible');
    });
}

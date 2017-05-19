import menuHtml from './menu.html';
import './menu.less';

let isMenuVisible = false;

export function bootMenu(rootNode) {
    rootNode.innerHTML = menuHtml;
    let innerMenuNode = rootNode.querySelector('[data-inner-menu]');
    manageOnMenuOpen(rootNode, innerMenuNode);
    manageOnMenuClose(rootNode, innerMenuNode);
}

function manageOnMenuOpen(rootNode, innerMenuNode) {
    let menuOpenNode = rootNode.querySelector('[data-menu-open]');
    menuOpenNode.addEventListener('click', () => {
       isMenuVisible = true;
       innerMenuNode.classList.add('is-visible');
    });
}

function manageOnMenuClose(rootNode, innerMenuNode) {
    let menuCloseNode = rootNode.querySelector('[data-menu-close]');
    menuCloseNode.addEventListener('click', () => {
       isMenuVisible = false;
       innerMenuNode.classList.remove('is-visible');
    });
}

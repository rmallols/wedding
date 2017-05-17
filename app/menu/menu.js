import menuHtml from './menu.html';
import './menu.less';

export function bootMenu(rootNode) {
  rootNode.innerHTML = menuHtml;
}

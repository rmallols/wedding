import appHtml              from './app.html';
import { bootRouter }       from './router/router';
import { bootMenu }         from './menu/menu';
import './app.less';

export function bootApp(rootNode) {
  rootNode.innerHTML = appHtml;
  let menuNode = document.querySelector('menu');
  bootRouter();
  bootMenu(menuNode);
}

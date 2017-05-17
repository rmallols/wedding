import appHtml from './app.html';
import './app.less';
import { bootMenu } from './menu/menu';
import { bootHome } from './home/home';

export function bootApp(rootNode) {
  rootNode.innerHTML = appHtml;
  let menuNode = document.querySelector('menu');
  let homeNode = document.querySelector('home');
  bootMenu(menuNode);
  bootHome(homeNode);
}

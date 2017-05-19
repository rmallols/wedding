import homeHtml from './home.html';
import './home.less';

export function nagivateToHome(rootNode) {
  rootNode.innerHTML = homeHtml;
}

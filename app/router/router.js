import { nagivateToHome }   from '../home/home';

export function bootRouter() {
    let homeNode = document.querySelector('home');
    nagivateToHome(homeNode);
    //var currentState = history.state;
}

export function navigateTo(route) {
    history.pushState(null, route, `#/${route}`);
}

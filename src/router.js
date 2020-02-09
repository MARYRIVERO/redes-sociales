
import { components } from './views/components.js';

const changeView = (route) => {
  const container = document.getElementById('container');
  container.innerHTML = '';
  switch (route) {
    case '': container.appendChild(components.login());
      break;
    case '#/': container.appendChild(components.login);
      break;
    default: container.appendChild(components.login());
      break;
  }
};

export const initRouter = () => {
  changeView(window.location.hash);
  window.addEventListener('hashchange', () => changeView(window.location.hash));
};
import { initRouter } from './router.js';
import { firebaseConfig } from './src/config/firebaseConfig';

const init = () => {
  firebase.initializeApp(firebaseConfig);
  firebase.firestore();
  initRouter();
};

window.onload = init();

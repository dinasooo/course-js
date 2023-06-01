import pages from './pages.js';
// import model from './model.js';
// import('./styles.css');

// const pageNames = ['login', 'main', 'profile'];

// document.addEventListener('click', () => {
//     const pageName = model.getRandomElement(pageNames);
//     pages.openPage(pageName);
// });

import mainPage from './mainPage';
import loginPage from './loginPage';
import profilePage from './profilePage';

pages.openPage('login');
loginPage.handleEvents();
mainPage.handleEvents();
profilePage.handleEvents();



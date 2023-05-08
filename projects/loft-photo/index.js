import pages from './pages.js';
import model from './model.js';
import('./styles.css');

const pageNames = ['login', 'main', 'profile'];

document.addEventListener('click', () => {
    const pageName = model.getRandomElement(pageNames);
    pages.openPage(pageName);
});

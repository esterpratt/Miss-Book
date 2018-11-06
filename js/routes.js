'use strict';

import bookApp from './pages/book-app.cmp.js';
import aboutPage from './pages/about-page.cmp.js';
import bookDetails from './pages/book-details.cmp.js';
import addBook from './pages/add-book.cmp.js';
import homePage from './pages/home-page.cmp.js';


// const aboutPage = {
//     template: `
//         <section class="about">
//             <h1>About</h1>
//         </section>
//     `
// }


var myRoutes = [
    {path: '/', component: homePage },
    {path: '/about', component: aboutPage },
    {path: '/addBook', component: addBook },
    {path: '/books', component: bookApp },
    {path: '/books/:bookId', component: bookDetails },
]

export default myRoutes;


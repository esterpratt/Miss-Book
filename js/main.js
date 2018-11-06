// import {bookService} from './services/book.service.js'
import bookApp from './pages/book-app.cmp.js';
import navBar from './cmps/nav-bar.cmp.js';
import userMsg from './cmps/user-msg.cmp.js';
import myRoutes from './routes.js'

Vue.use(VueRouter);
const myRouter = new VueRouter({routes: myRoutes})

new Vue({
    el: '#app',
    router: myRouter,
    components: {
        bookApp,
        userMsg,
        navBar,
    },

    // created() {
    //     this.$router.push(`/`)
    // }
})

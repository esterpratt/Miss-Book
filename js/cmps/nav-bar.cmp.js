'use strict'

export default {
    template: `
        <nav>
            <router-link class="router-link" exact to="/">Home</router-link> |
            <router-link class="router-link" to="/about">About</router-link> |
            <router-link class="router-link" to="/books">Books</router-link>
        </nav>
    `,
}
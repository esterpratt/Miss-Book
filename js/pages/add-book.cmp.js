'use strict';

import { bookService } from '../services/book.service.js'
import { netService } from '../services/net-service.js'
import eventBus, { SHOW_USER_MSG } from '../event-bus.js'
import foundBook from '../cmps/found-book.cmp.js'

export default {
    template: `
            <section class="search-book-container">
                <h1>Search Book</h1>
                <input type="text" v-model="searchInput" @input="searchBook"/>
                <ul class="google-books">
                    <found-book v-if="googleBooks.length > 0"
                        v-for="(book, idx) in googleBooks"
                        :bookTitle="book.volumeInfo.title"
                        @addBook="addBook(book, idx)">
                    </found-book>
                </ul>
            </section>
    `,

    components: {
        foundBook
    },

    data() {
        return {
            searchInput: '',
            googleBooks: [],
        }
    },

    computed: {

    },

    methods: {
        searchBook() {
            this.googleBooks = [];
            if (this.searchInput !== '') {
                netService.getBooks(this.searchInput)
                    .then(booksRes => {
                        this.googleBooks = booksRes.data.items;
                    });
            }
        },

        addBook(googleBook) {
            bookService.addGoogleBook(googleBook)
                .then((book) => {
                    // show msg
                    eventBus.$emit(SHOW_USER_MSG, { type: 'success', txt: 'Book was saved', link: `/books/${book.id}` })
                })
                .catch(() => {
                    // show msg
                    eventBus.$emit(SHOW_USER_MSG, { type: 'failur', txt: 'Book allreday exist' })
                })
        }
    },

    created() {

    },
}
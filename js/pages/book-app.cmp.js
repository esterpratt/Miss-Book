'use strict';

import bookFilter from '../cmps/book-filter.cmp.js';
import bookList from '../cmps/book-list.cmp.js';
import { bookService } from '../services/book.service.js'

export default {
    template: `
            <section v-if="books">
                <book-filter @filtered="setFilter"></book-filter>
                <div class="btn-container">
                    <button class="add-book-btn" @click="goToAddBook">Add New Book</button>
                </div>
                <book-list :books="booksToShow"></book-list> 
            </section>
    `,

    components: {
        bookFilter,
        bookList,
    },

    data() {
        return {
            books: null,
            filter: null,
        }
    },

    computed: {
        booksToShow() {
            if (!this.filter) return this.books;
            let fromPrice = this.filter.fromPrice ? this.filter.fromPrice : 0;
            let toPrice = this.filter.toPrice === '' ? Infinity : this.filter.toPrice;
            return this.books.filter(book => book.title.includes(this.filter.byName))
                .filter(book => book.listPrice.amount > fromPrice)
                .filter(book => book.listPrice.amount < toPrice)
        },
    },

    methods: {
        setFilter(filter) {
            this.filter = Object.assign({}, filter);
        },

        goToAddBook() {
            this.$router.push('/addBook')
        }
    },

    created() {
        bookService.query()
            .then(booksData => {
                this.books = booksData
            })
    },
}
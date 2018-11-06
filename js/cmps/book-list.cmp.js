'use strict';

import bookPreview from './book-preview.cmp.js';

export default {
    props: ['books'],

    template: `
            <section>
                <ul class="book-list">
                    <book-preview v-for="currentBook in books" :book="currentBook" @click.native="selectBook(currentBook.id)">
                    </book-preview>
                </ul>
            </section>
    `,

    components: {
        bookPreview,
    },

    methods: {
        selectBook(bookId) {
            this.$router.push(`/books/${bookId}`)
        },
    },
}
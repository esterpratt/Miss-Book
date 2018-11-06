'use strict';

export default {
    props: ['bookTitle'],
    template: `
            <li>
                <p>{{bookTitle}}</p>
                <button @click="addBook">+</button>
            </li>
    `,

    methods: {
        addBook() {
            this.$emit('addBook')
        }
    }
}
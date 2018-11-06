'use strict';

export default {
    props: ['book'],

    template: `
            <section>
                <li class="">
                    <div class="book-img" :style="'background-image: url(' + book.thumbnail + ')'"></div>
                    <h2>{{book.title}}</h2>
                    <p>{{book.listPrice.amount}} {{currencyIcon[book.listPrice.currencyCode]}}</p>
                </li>
            </section>
    `,

    computed: {
        currencyIcon() {
            return {
                'USD': '$',
                'EUR': '€',
                'ILS': '₪',
            }
        }
    },

    created() {

    },
}
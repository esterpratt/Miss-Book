'use strict';

import eventBus, { SHOW_USER_MSG } from '../event-bus.js'
import { bookService } from '../services/book.service.js'
import partText from '../cmps/part-text.cmp.js';
import reviewAdd from '../cmps/review-add.cmp.js';
import reviewDetails from '../cmps/review-details.cmp.js';

export default {
    template: `
            <section v-if="book">
                <div class="book-details-comp" >
                    <div class="btns-container">
                        <button @click="backToList">🡐 Back to List</button>
                        <div class="links-container">
                            <router-link class="prev-book-link" :to="prevBookId">Previous Book</router-link>
                            <router-link class="next-book-link" :to="nextBookId">Next Book</router-link>
                        </div>
                    </div>
                    <div class="book-details-container">
                        <div class="book-details-img">
                            <img :src="book.thumbnail">
                        </div>
                        <div class="book-details">
                            <p class="on-sale" v-if="book.listPrice.isOnSale">On Sale!</p>
                            <h2 class="book-title">{{book.title}}</h2>
                            <p :class="priceColor">{{book.listPrice.amount}} {{currencyIcon[book.listPrice.currencyCode]}}</p>
                            <p class="how-old">{{howOld}}</p>
                            <p>{{readDif}}</p>
                            <p class="book-subtitle">{{book.subtitle}}</p>
                            <p>{{book.authors.length > 1 ? 'Authors' : 'Author'}}: {{book.authors.join(', ')}}</p>
                            <div>Description:
                                <part-text :txt="book.description" class="book-description">
                                </part-text>
                            </div>               
                            <p>{{book.pageCount}} Pages</p>
                            <p>Language: {{bookLang[book.language]}}</p>
                            <p>Published Date: {{book.publishedDate}}</p>
                            <p>Categories: {{book.categories.join(', ')}}</p>
                        </div>
                    </div>
                </div>
                <div class="reviews-container">
                    <div class="reviews-header">
                        <p>Book Reviews:</p>
                        <button @click="isToAddRev = true" v-if="!isToAddRev">Add Review</button>
                    </div>
                    <div class="review-add-container">    
                        <review-add v-if="isToAddRev" @saveReview="saveReview" @cancelReview="isToAddRev = false"></review-add>
                    </div>
                    <review-details v-for="(review, idx) in book.reviews" 
                    :review="review" 
                    @deleteReview="deleteReview(idx)"></review-details>
                </div>
            </section>
    `,

    components: {
        partText,
        reviewAdd,
        reviewDetails,
    },

    data() {
        return {
            isToAddRev: false,
            book: null,
            nextBookId: null,
            prevBookId: null,
        }
    },

    computed: {
        currencyIcon() {
            return {
                'USD': '$',
                'EUR': '€',
                'ILS': '₪',
            }
        },

        bookLang() {
            return {
                'he': 'Hebrew',
                'en': 'English',
                'sp': 'Spanish',
            }
        },

        readDif() {
            let { pageCount } = this.book;
            if (pageCount > 500) {
                return 'Long reading';
            } else if (pageCount > 200) {
                return 'Descent reading';
            } else {
                return 'Light reading';
            }
        },

        howOld() {
            let currYear = (new Date).getFullYear();
            let timePassed = currYear - this.book.publishedDate;
            if (timePassed > 10) {
                return 'Veteran Book';
            } else if (timePassed < 1) {
                return 'New!';
            }
        },

        priceColor() {
            return {
                expensive: this.book.listPrice.amount > 150,
                cheap: this.book.listPrice.amount < 20,
            }
        },
    },

    methods: {
        backToList() {
            this.$router.push('/books')
        },

        saveReview(review) {
            this.isToAddRev = false;

            bookService.addFeedback(this.book.id, review)
                .then(() => {
                    // show msg
                    eventBus.$emit(SHOW_USER_MSG, { type: 'success', txt: 'Review was saved' })

                })
                .catch(() => {
                    // show msg
                    eventBus.$emit(SHOW_USER_MSG, { type: 'failur', txt: 'Review was not saved' })
                })
        },

        deleteReview(idx) {
            bookService.deleteReview(this.book.id, idx)
                .then(() => {
                    // show msg
                    eventBus.$emit(SHOW_USER_MSG, { type: 'warning', txt: 'Review was deleted' })

                })
                .catch(() => {
                    // show msg
                    eventBus.$emit(SHOW_USER_MSG, { type: 'failur', txt: 'Review was not deleted' })
                })
        },

        loadBookData() {
            bookService.getBookById(this.$route.params.bookId)
                .then(book => this.book = book);
            bookService.getNextBookId(this.$route.params.bookId)
                .then(id => this.nextBookId = id);
            bookService.getPrevBookId(this.$route.params.bookId)
                .then(id => this.prevBookId = id);
        }
    },

    created() {
        this.loadBookData();
    },

    watch: {
        '$route.params.bookId': function () {
            this.loadBookData();
        }
    }
}
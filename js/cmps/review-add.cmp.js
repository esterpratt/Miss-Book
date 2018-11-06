'use strict';

export default {
    template: `
            <section class="review-add">
                Fill in Your Review:
                <form>
                    <label>Name: 
                        <input ref="readerName" placeholder="Books Reader" v-model="review.readerName"/>
                    </label>
                    <label>Date: 
                        <input type="date" v-model="review.date"/>
                    </label>
                    <div class="stars">
                        Rank: <span class="star" v-for="(star, idx) in stars" :class="{selected: star}" @click="onStarClick(idx)">★</span>
                    </div>
                    <textarea rows="5" placeholder="Free Text" v-model="review.revText">
                    </textarea>
                </form>
                <button @click="saveReview">Save Review</button>
                <button @click="cancelReview">Cancel</button>
            </section>
    `,

    data() {
        return {
            review: {
                readerName: null,
                revText: null,
                date: null,
                reviewStars: 1
            },
            stars: [true, false, false, false, false],
        }
    },

    methods: {
        onStarClick(idx) {
            this.review.reviewStars = idx + 1;
            // paint stars to idx
            for (let i = 0; i <= idx; i++) {
                this.stars.splice(i, 1, true);
            }

            // remove painted from stars from idx
            for (let i = idx + 1; i < this.stars.length; i++) {
                this.stars.splice(i, 1, false);
            }
        },

        saveReview() {
            this.$emit('saveReview', this.review)
        },

        cancelReview() {
            this.$emit('cancelReview')
        },
    },

    created() {
        this.review.date = new Date().toDateInputValue()
    },

    mounted() {
        this.$refs.readerName.focus();
    }
}

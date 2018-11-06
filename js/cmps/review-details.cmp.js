'use strict';

export default {
    props: ['review'],
    template: `
            <section class="review-container">
                <div class="review-header">
                    <p>{{review.date}}</p>
                    <p>Rank: {{review.reviewStars}}</p>
                    <p>Reviewed by: {{review.readerName}}</p>
                    <button @click="deleteReview">X</button>
                </div>
                <p class="review-content">{{review.revText}}</p>
            </section>
    `,

    methods: {
        deleteReview() {
            this.$emit('deleteReview')
        }
    }
}
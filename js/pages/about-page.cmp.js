'use strict';

var interval;

export default {
    template: `
            <section class="about">
                <h1>I am Ester</h1>
                <div class="me-img-container" @click="show = !show">
                    <img src="../img/me.jpg">
                </div>
                <transition name="slide-fade"><p v-if="show">These are peacocks I trained to eat from human hands</p></transition>
                <div class="me-details">
                    This app was built using VUE!
                </div>
            </section>
    `,

    data() {
        return {
            show: false,
        }
    },

    created() {
        interval = setInterval(() => {
            console.log('nothing to do');
        }, 1000)
    },

    destroyed() {
        clearInterval(interval);
    }
}
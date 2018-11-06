import eventBus, { SHOW_USER_MSG } from '../event-bus.js'

export default {
    template: `
        <section class="user-msg" :class="msg.type" v-if="msg">
            <button @click="removeMsg">X</button>
            <p>{{msg.txt}}</p>
            <router-link v-if="msg.link" :to="msg.link" class="book-link">Check it Out</router-link>
        </section>  
    `,
    data() {
        return {
            msg: null
        }
    },

    methods: {
        removeMsg() {
            this.msg = null;
        }
    },

    created() {
        eventBus.$on(SHOW_USER_MSG, msg => {
            this.msg = msg;
            var delay = 5000;
            setTimeout(() => {
                this.msg = null;
            }, delay)
        })
    }
}
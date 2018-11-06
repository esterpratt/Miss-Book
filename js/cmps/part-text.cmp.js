'use strict';

export default {
    props: ['txt'],
    template: `
            <section>
                <p v-if="!isToShowLongTxt">
                    {{txt.slice(0, 99)}}<span v-if="txt.length > 100">...</span>
                </p>                                  
                <p v-else>
                    {{txt}}
                </p>
                <button v-if="txt.length > 100" @click="toggleLongTxt">
                    {{isToShowLongTxt ? 'Read Less' : 'Read More'}}
                </button>
            </section>
    `,

    data() {
        return {
            isToShowLongTxt: false,
        }
    },

    methods: {
        toggleLongTxt() {
            this.isToShowLongTxt = !this.isToShowLongTxt;
        },
    }
}
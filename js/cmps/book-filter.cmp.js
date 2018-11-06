'use strict';

export default {
    template: `
    <section>
        <form class="filter">
            <p>Filter By:</p>
            <label class="name-filter"> Name: 
                <input type="text" v-model.trim="filter.byName" />
            </label>
            <label>From Price: 
                <input type="text" v-model.number="filter.fromPrice" />
            </label>
            <label>To Price: 
                <input type="text" v-model.number="filter.toPrice" />
            </label>
            <button type="submit" @click.prevent="setFilter">Filter</button>
        </form>
    </section>
    `,
    data() {
        return {
            filter: {
                byName: '',
                fromPrice: 0,
                toPrice: ''
            },
        }
    },
    methods: {
        setFilter() {
            this.$emit('filtered', this.filter);
        }
    }
}
export default {
    template: `
    <section class="email-filter">
        <input v-model="filterBy.txt" type="text" @input="filter" placeholder="Search mail...">
    </section>
    `,
    data() {
        return {
            filterBy: {
                txt: '',  
            }
        };
    },
    methods: {
        filter() {
            this.$emit('filtered', {...this.filterBy });
        }
    }
};

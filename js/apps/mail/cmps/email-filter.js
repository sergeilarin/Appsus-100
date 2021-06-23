export default {
    template: `
    <section class="email-filter">
        <label>Search:</label>
        <input v-model="filterBy.txt" type="text" @input="filter" placeholder="Search...">
        
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

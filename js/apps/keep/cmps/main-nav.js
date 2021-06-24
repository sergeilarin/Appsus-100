export default {
    template:`
        <section >
            <form>
            <label>Search 🔍</label>
        <input v-model="searchBy.txt" type="text" placeholder="Search...">
        <button @click="filter">search</button>
            </form>
        </section>
    `,
        data() {
            return {
               searchBy: {
                   txt: ''
               }
            };
        },
        methods: {
            filter() {
                console.log('filter', {...this.searchBy });
                this.$emit('filter', {...this.searchBy });
            }
        }
}





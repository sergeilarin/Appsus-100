export default {
    template:`
        <section class="">
            <form>
            <label>Search 🔍</label>
        <input v-model="searchBy" type="text" placeholder="Search...">
            </form>
        </section>
    `,
        data() {
            return {
               searchBy: {
                   
                }
            };
        },
}
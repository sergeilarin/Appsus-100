export default {
    template:`
        <section class="main-nav-keep" >
        <div class="logo">keep</div>
        <!-- <img src="imgs/keep-logo4.jpg" alt=""> -->
            <form class="search">
            <!-- <label>Search </label> -->
        <input v-model="searchBy.txt" type="text" placeholder="  Search🔍" @input="filter" style="width: 350px; height: 30px; border-radius: 7px; border:none;">
        <!-- <button>search</button> -->
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





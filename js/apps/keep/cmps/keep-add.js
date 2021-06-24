
export default {
    props: ['selectNote'],
    template: `
        <section>
            <form >
                <input  ref="note" v-model="note.title" type="text" placeholder="" >
                <input  v-model="note.txt" type="text" placeholder="" >
                <button @click="onSave">save</button>
               <button>🖼</button>
            </form>
                <!-- <button title="New note" @click="addNewList">📝</button> -->
        </section>
    `,
    data() {
        return {
            note: {
                type: "noteText",
                isPinned: false,
                title: ' ',
                info: {
                    text: ''
                },
                background: ''
            },
            filterBy:''
        }
    },
    methods: {
        onSave() {
            this.$emit('noteAdd', this.note),
                this.note = {
                    type: "noteText",
                    isPinned: false,
                    title: '',
                    info: {
                        text: ''
                    },
                    background: ''
                }

        }
    },
    mounted() {
        this.$refs.note.focus()
    },
    created(){
        this.filterBy=this.note.title
        console.log(this.filterBy);

    }
}
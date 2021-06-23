
export default {
    template:`
        <section>
            <form>
            <label for="newList">
            <!-- <button title="New note" @click="addNewList">📝</button> -->
        <input ref="note" v-model="note.title" type="text" placeholder="" id="newList"></label>
        <input v-if="note.title" v-model="note.txt" type="text" placeholder="" >
        <button @click="onSave">save</button>
        
        <button>🖼</button>
            </form>
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
                }
                },
           
        }
        },
        methods: {
            onSave(){
                this.$emit('noteAdd', this.note),
                this.note=    {
                    type: "noteText",
                    isPinned: false,
                    title: '',
                    info: {
                        text: ''
                    }
                    }
               
            }
        },
        mounted(){
            this.$refs.note.focus()
          },
}
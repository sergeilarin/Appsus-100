
export default {
    props: ['selectNote'],
    template: `
        <section>
            <form class="main-input">
                <div>
                <input ref="note" v-model="note.title" id="inside" focus=" outline: none" type="text" placeholder ="  Add note" style="width: 350px; height: 30px; border-radius: 7px; border:none; margin-left: 10px;">
                <button title="Add note text" class="btn add" @click="onSave('textNote')">➕</button>
                <button title="Add note todos" class="btn add" @click="onSave('todoNote')">📝</button>
                <button title="Add note imag" class="btn add" @click="onSave('imagNote')">🌄</button>
                </div>
                <input v-if="note.title" v-model="note.txt" type="text" placeholder="" style="width: 350px; height: 30px; border-radius: 7px;  border:none;" >
            </form>
        </section>
    `,
    data() {
        return {
            note: {
                type: 'textNote',
                isPinned: false,
                title: '',
                info: {
                    text: ''
                },
                background: ''
            },
            // filterBy: ''
        }
    },
    methods: {
        onSave(type) {
            this.note.type = type
            switch (this.note.type) {
                case 'textNote':
                    this.note.info = 'סתם'
                    break;
                case 'todoNote':
                    this.note.info = {
                        todo: [
                            {
                                txt: ''
                            }
                        ]
                    }
                    break;
                case 'imagNote':
                    this.note.info = {

                        url: ''
                    }
                    break;
            }
            this.$emit('noteAdd', this.note),
                this.note = {
                    type: "textNote",
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
    // created() {
    //     this.filterBy = this.note.title
    //     console.log(this.filterBy);

    // }
}
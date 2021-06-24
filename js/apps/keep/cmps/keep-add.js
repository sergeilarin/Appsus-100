
export default {
    props: ['selectNote'],
    template: `
        <section>
            <form class="main-input">
                <div>
                <input ref="note" v-model="note.title" id="inside" focus=" outline: none" type="text" placeholder ="  Add note" style="width: 350px; height: 30px; border-radius: 7px; border:none; margin-left: 10px;">
                <button title="Add note text" class="btn add" @click="onSave('noteText')">➕</button>
                <button title="Add note todos" class="btn add" @click="onSave('noteToDo')">📝</button>
                <button title="Add note imag" class="btn add" @click="onSave('noteImg')">🌄</button>
                </div>
                <input v-if="note.title" v-model="note.txt" type="text" placeholder="" style="width: 350px; height: 30px; border-radius: 7px;  border:none;" >
            </form>
        </section>
    `,
    data() {
        return {
            note: {
                type: 'noteText',
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
            switch (type) {
                case 'noteText':
                    this.note
                case 'noteToDo':
                    this.note.info = {
                        todo: [
                            {
                                txt: ''
                            }
                        ]
                    }
                case 'noteImg':
                    this.note.info = {
                        url: ''
                    }
            }
            console.log(this.note.info);
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
    // created() {
    //     this.filterBy = this.note.title
    //     console.log(this.filterBy);

    // }
}
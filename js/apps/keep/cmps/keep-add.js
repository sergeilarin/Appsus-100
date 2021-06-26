import { utilService } from "../../../services/util-service.js"

utilService

export default {
    props: ['selectNote'],
    template: `
        <section>
            <form class="main-input">
                <div>
            <div class="main-add">
                    <div>
                <button title="Add note imag" class="btn add" @click="onSave('imagNote')">🌄</button>
                <button v-if="todoCount===0" title="Add note todos" class="btn add" @click="setTodo">📝</button>
                <button title="Add note text" class="btn add" @click="onSave('textNote')">➕</button>
                <input ref="note" v-model="note.title" id="inside" class="marg" focus=" outline: none" type="text" placeholder ="  Add note" style="width: 350px; height: 30px; border-radius: 7px; border:none; margin-left: 10px;">
                    </div>
                    <div>
                <input v-if="(note.type==='textNote'&& note.title && todoCount===0)" class="marg" v-model="note.txt" type="text" placeholder="" style="width: 350px; height: 30px; border-radius: 7px;  border:none; " >
                </div>
            </div>
                <div v-if="todoCount>0" >
                    <button title="Add note todos" class="btn add" @click="onSave('todoNote')">📝</button>
                    <input v-model="note.info.todo[0].txt" type="text" placeholder=" " style="width: 350px; height: 30px; border-radius: 7px;  border:none;" >
                    <button @click= "addTodo(note.info.todo[0].txt,$event)" class="btn add">✔</button>
                </div>
            
                <!-- note.info.todo -->
                </div>
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
            todoCount: 0
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
                    this.todoCount = 0
                    break;
                case 'imagNote':
                    this.note.info = {
                        url: ''
                    }
                    if (!this.note.info.url) this.note.info.url = 'https://dalicanvas.co.il/wp-content/uploads/2020/02/%D7%A9%D7%A7%D7%99%D7%A2%D7%94-%D7%A7%D7%9C%D7%90%D7%A1%D7%99%D7%AA-1.jpg'
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
        },
        setTodo() {
            this.todoCount ++
            this.note.info = {
                todo: [
                    {
                        txt: '',
                        id: utilService.makeId()
                    }
                ]
            }
        },
        addTodo(text,e) {
            const newToDo={
                txt: text,
                id: utilService.makeId()
            }
            // e.preventDefault()
            this.note.info.todo.push(newToDo)
            this.note.info.todo[0].txt=''
        }
    },

    mounted() { 
        // watch
        this.$refs.note.focus()
    },

    // created() {
    //     this.filterBy = this.note.title
    //     console.log(this.filterBy);

    // }
}
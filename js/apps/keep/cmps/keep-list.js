import imagNote from '../cmps/imag-note.js';
import todoNote from '../cmps/todo-note.js';
import textNote from '../cmps/text-note.js';

export default {
    props: ['notes'],
    template: `
    <ul class="list">
        <li>
            <div class="main">
            <section v-if="note.isPinned" v-for="note in notes">
                <component  :key="note.id" class="preview-container" 
                    :is="note.type"
                    :note="note"
                    @remove="remove"
                    @removeTodo="removeTodo"
                    @pin="pin"
                    @update="updateNote(note)" >
                </component>
            </section>
    </div>
       <div class="main">
       <section v-if="!note.isPinned" v-for="note in notes">
                <component  :key="note.id" class="preview-container" 
                    :is="note.type"
                    :note="note"
                    @remove="remove"
                    @removeTodo="removeTodo"
                    @pin="pin"
                    @update="updateNote(note)" >
                </component>
            </section>

       </div>
          
        </li>
    </ul>

    `,
    data() {
        return {
            // attachedList: [],
            // standardList: []
        }
    },
    computed: {

    },
    methods: {
        remove(noteId) {
            this.$emit('remove', noteId);
        },
        removeTodo(todId){
            console.log(todId, 'id remov');
            this.$emit('removeTodo', todId);
        },
        updateNote(note) {
            this.$emit('updateNote', note);
        },
        pin(note) {
            // if (note.isPinned) this.attachedList.push(note.isPinned)
            // if (!note.isPinned) this.standardList.push(!note.isPinned)
            this.$emit('pin', note);
        }

    },
    created() {
        // console.log(this.note.isPinned,'lala');
        // console.log(this.notes, 'mylist');
        // console.log(this.attachedList, 'attchlist');
        // console.log(this.standardList, 'standartlist');

    },
    components: {
        imagNote,
        todoNote,
        textNote,

    },
};

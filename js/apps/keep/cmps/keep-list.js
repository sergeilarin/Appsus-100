import imagNote from '../cmps/imag-note.js';
import todoNote from '../cmps/todo-note.js';
import textNote from '../cmps/text-note.js';

export default {
    props: ['notes'],
    template: `
    <ul class="list">
        <li v-for="note in notes" :key="note.id" class="preview-container"  >
        <component :is="note.type" :note="note" >
             <!-- @update="updateNote(note)" -->
             </component>
            <button class="btn delete" @click.stop="remove(note.id)">Delete</button>
        </li>
    </ul>
    `,
    methods: {
        remove(noteId) {
            console.log(noteId,'id remov');
            this.$emit('remove', noteId);
        },
        updateNote(note){
            this.$emit('updateNote', note);
        }

    },
    components: {  
        imagNote,
        todoNote,
        textNote,
   
    },
};

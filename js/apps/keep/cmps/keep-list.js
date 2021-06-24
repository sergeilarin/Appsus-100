import keepPreview from "./keep-preview.js";

export default {
    props: ['notes'],
    template: `
    <ul class="list">
        <li v-for="note in notes" :key="note.id" class="preview-container"  >
            <keep-preview :note="note" @update="updateNote(note)"/>
            <button @click.stop="remove(note.id)">X</button>
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
        keepPreview
    },
};

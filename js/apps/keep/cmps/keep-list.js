import keepPreview from "./keep-preview.js";



export default {
    props: ['notes'],
    template: `
    <ul class="list">
        <li v-for="note in notes" :key="note.id" class="preview-container"  >
            <keep-preview :note="note"/>
            <!-- <div class="actions"> -->
                <button @click.stop="remove(note.id)">X</button>
            <!-- </div> -->
        </li>
    </ul>
    `,
    created(){
      console.log(this.notes);  
    },
    methods: {
        remove(noteId) {
            this.$emit('remove', noteId);
        },
    },
    components: {
      keepPreview
    },

};
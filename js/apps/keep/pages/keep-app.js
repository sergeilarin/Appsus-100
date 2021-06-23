import mainNav from '../cmps/main-nav.js';
import creat from '../cmps/creat.js';
import { keepService } from '../services/keep-service.js';
import keepList from "../cmps/keep-list.js";

export default {
    template: `
        <section class="">
            <h2>keep</h2>
            <main-nav></main-nav>
            <creat @noteAdd="addnote"></creat>
            <keep-list v-if="notes" :notes="notes" @remove="onRemoveNote"></keep-list>
        </section>
    `,
    created(){
        this.loadnotes()
    },
    data() {
        return {
            notes: null,
        };
    },
    methods: {
        addnote(note) {
            keepService.addNewNote(note)
            .then( this.loadnotes)
        },
        loadnotes(){
            keepService.query()
            .then(notes => {
                this.notes = notes
            })
        },
        onRemoveNote(noteId){
            keepService.removeNote(noteId)
            .then( this.loadnotes)
          
        }
    },
    components: {
        mainNav,
        creat,
        keepList,
    }
}
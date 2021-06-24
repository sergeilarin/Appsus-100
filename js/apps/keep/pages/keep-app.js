import mainNav from '../cmps/main-nav.js';
import keepAdd from '../cmps/keep-add.js';
import { keepService } from '../services/keep-service.js';
import keepList from "../cmps/keep-list.js";

export default {
    template: `
        <section class="">
            <h2>keep</h2>
            <main-nav @filter="setFilter" ></main-nav>
            <keep-add @noteAdd="addnote" ></keep-add>
            <keep-list v-if="notes" :notes="notesToShow" @remove="onRemoveNote"  @updateNote="newUpDate"></keep-list>
        </section>
    `,
    created() {
        this.loadnotes()
    },
    data() {
        return {
            notes: null,
            filterBy: null
        };
    },
    methods: {
        addnote(note) {
            keepService.saveNote(note)
                .then(this.loadnotes)
        },
        loadnotes() {
            keepService.query()
                .then(notes => {
                    this.notes = notes
                })
        },
        onRemoveNote(noteId) {
            console.log(noteId, 'id remov');
            keepService.removeNote(noteId)
                .then(this.loadnotes)
            console.log(noteId);
        },
        newUpDate(note) {
            keepService.saveNote(note)
                .then(this.loadnotes)
        },
        setFilter(filterBy){
            this.filterBy = filterBy
            console.log( this.filterBy,'filter');
        }
    },
    computed: {
        notesToShow() {
            if (!this.filterBy) return this.notes;
            const searchStr = this.filterBy.txt.toLowerCase();
            const notesToShow = this.notes.filter((note)=> {
                return note.title.toLowerCase().includes(searchStr) 
            })
            return notesToShow;
        }
    },
    components: {
        mainNav,
        keepAdd,
        keepList,
    }
}
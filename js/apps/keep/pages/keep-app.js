import mainNav from '../cmps/main-nav.js';
import keepAdd from '../cmps/keep-add.js';
import { keepService } from '../services/keep-service.js';
import keepList from "../cmps/keep-list.js";
import { eventBus } from '../../../services/event-bus-service.js';

export default {
    template: `
        <section class="main-rontainer">
           
            <main-nav @filter="setFilter" ></main-nav>
            <keep-add @noteAdd="addnote" ></keep-add>
            <keep-list v-if="notes" :notes="notesToShow" @remove="onRemoveNote" @removeTodo="removeTodo" @updateNote="newUpDate" @pin="pin"></keep-list>
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
        removeTodo(todId){
            keepService.removeNote(todId)
        },
        onRemoveNote(noteId) {
            // console.log(noteId, 'id remov');
            keepService.removeNote(noteId)
                .then(this.loadnotes)
                .then(() => {
                    // this.loadnotes
                    console.log('msg');
                    const msg = {
                        txt: 'Deleted successfuly',
                        type: 'success'
                    };
                    eventBus.$emit('show-msg', msg);
                })
                .catch(err => {
                    console.log(err);
                    const msg = {
                        txt: 'Error, please try again',
                        type: 'error'
                    };
                    eventBus.$emit('show-msg', msg);
                });
        
            // console.log(noteId);
        },
        newUpDate(note) {
            keepService.saveNote(note)
                .then(this.loadnotes)
        },
        setFilter(filterBy) {
            this.filterBy = filterBy
            console.log(this.filterBy, 'filter');
        },
        pin(note) {
            keepService.saveNote(note)
                .then(this.loadnotes)
        }
    },
    computed: {
        notesToShow() {
            if (!this.filterBy) return this.notes;
            const searchStr = this.filterBy.txt.toLowerCase();
            const notesToShow = this.notes.filter((note) => {
                return (
                    note.title.toLowerCase().includes(searchStr)
                    // +
                    // if(note.info.text){
                    //     note.text.toLowerCase().includes(searchStr)
                    // }
                   
                );
           
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
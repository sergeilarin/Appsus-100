import { emailService } from '../services/email-services.js';
import emailList from '../cmps/email-list.js';
import emailFilter from '../cmps/email-filter.js';
// import { eventBus } from '../services/event-bus-service.js';

export default {
    template: `
        <section class="maile-app">
            <email-filter @filtered="setFilter" /></email-filter>
            <div class="main-maile">
                <div class="action-container">
                   <button>Inbox</button>
                   <button>Starred</button>
                   <button>Sent Mail</button>
                   <button>Drafts</button>
                   <button>Read</button>
                </div>
                <email-list :emails="emailsToShow" @remove="removeEmail"></email-list>
                
                <!-- <book-list v-if="!selectedBook" :books="booksToShow" @selected="selectBook" />  -->
            </div>
            <!-- <router-link class="addBook" to="/book/add"></router-link> -->
            <!-- <book-details v-else :book="selectedBook" @close="closeDetails"></book-details>  -->
        </section>
    `,
    data() {
        return {
            emails: [],
            selectedEmail: null,
            filterBy: null
        };
    },
    created() {
        this.loadEmails();
    },
    methods: {
        loadEmails() {
            emailService.query()
                .then(emails => {
                    this.emails = emails
                });
        },
        removeEmail(id){
            console.log('ser');
            emailService.removeEmail(id)
            .then(()=>{
                this.loadEmails()
            })
        },
        setFilter(filterBy) {
            console.log(filterBy);
            this.filterBy = filterBy;
        },
        // selectBook(bookId) {
        //     const book = bookService.getBookById(bookId);
        //     this.selectedBook = book;
        // },
        // closeDetails() {
        //     this.selectedBook = false;
        // },
    },
    computed: {
        emailsToShow() {
            if (
                !this.filterBy ||
                (this.filterBy.txt === '')
            ) return this.emails;
            const searchStr = this.filterBy.txt.toLowerCase();
            const emailsToShow = this.emails.filter((email) => {
                return (
                    email.body.toLowerCase().includes(searchStr)
                );
            });
            return emailsToShow;
        },
    },
    components: {
        emailList,
        emailFilter,
    }
};




// @selected="selectemail"
import { emailService } from '../services/email-services.js';
import emailList from '../cmps/email-list.js';
import emailFilter from '../cmps/email-filter.js';
import emailDetails from '../cmps/email-details.js';
import newEmail from '../cmps/new-email.js';

// import { eventBus } from '../services/event-bus-service.js';

export default {
    template: `
        <section class="maile-app">
            <email-filter @filtered="setFilter" /></email-filter>
           <div class="unread">Unread({{getUnreadNum}})</div>
            <div class="options-container">
                <div class="action-nav">
                   <button class="compose-btn"  @click="creatNewMail">+ Compose</button>
                   <button @click="showInboxtMail" class="inbox-btn"> <img src="./imgs/icons8-inbox-30.png" alt=""> <span>Inbox  {{emails.length}}</span></button>
                   <button @click="onStarred">  <img src="./imgs/icons8-star-filled-24.png" alt=""><span>Starred</span></button>
                   <button @click="showSentMails"><img src="./imgs/icons8-sent-30.png" alt=""><span>Sent Mail</span></button>
                   <!-- <button>Drafts</button> -->
                </div>
                <new-email v-if="isNewMail" @onSendEmail="sendEmail"></new-email>
                <email-list v-else :emails="emailsToShow" @remove="removeEmail" @selected="selectEmail" ></email-list>
               
            </div>
        </section>
    `,
    data() {
        return {
            emails: [],
            selectedEmail: null,
            filterBy: null,
            isNewMail: false,
            sentMails: []
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
        removeEmail(id) {
            const idx = this.sentMails.findIndex(sentMail=> sentMail.id === id);
            this.sentMails.splice(idx, 1)
            emailService.removeEmail(id)
                .then(() => {
                    this.loadEmails()
                })
        },
        setFilter(filterBy) {
            console.log(filterBy);
            this.filterBy = filterBy;
        },
        closeDetails() {
            this.selectedEmail = false;
        },
        selectEmail(emailId) {
            emailService.getEmailById(emailId)
                .then(email => {
                    this.selectedEmail = email;

                })
        },
        creatNewMail() {
            this.isNewMail = true
        },
        sendEmail(email) {
            this.sentMails.push(email)
            // emailService.save(email)
            emailService.sendNewEmail(email)
            .then(() => {
                this.loadEmails()
            })
            this.isNewMail = false
        },
        showSentMails() {
            this.filterBy = 'sentMails'
           
        },
        showInboxtMail(){
            this. isNewMail=false,
            this.filterBy = ''
        },
        onStarred(){
            this.filterBy = 'starred'
        }
    },
    computed: {
        emailsToShow() {
            console.log(this.emails);
            if (
                !this.filterBy ||
                (this.filterBy.txt === '')
            ) return this.emails;
            if ( this.filterBy === 'starred') {
                const starMail = this.emails.filter((email) => {
                    return (
                        email.isStarred === true
                    );
                });
                return starMail
            }
            if (this.filterBy === 'sentMails') return this.sentMails
            const searchStr = this.filterBy.txt.toLowerCase();
            const emailsToShow = this.emails.filter((email) => {
                return (
                    email.subject.toLowerCase().includes(searchStr) +
                    email.body.toLowerCase().includes(searchStr)
                );
            });

            return emailsToShow;
        },
        getUnreadNum() {
            const num = this.emails.filter((email) => {
                return (
                    email.isRead === false
                );
            });
            return num.length
        }
    },
    components: {
        emailList,
        emailFilter,
        emailDetails,
        newEmail


    }
};




// @selected="selectemail"
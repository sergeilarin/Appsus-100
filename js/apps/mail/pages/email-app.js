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
            <div >{{getUnreadNum}}</div>
            <div class="options-container">
                <div class="action-nav">
                   <button  @click="creatNewMail">+ Compose</button>
                   <button>Inbox ({{emails.length}})</button>
                   <button>Starred</button>
                   <button >Sent Mail</button>
                   <button>Drafts</button>
                   <button>Read</button>
                </div>
                <new-email v-if="isNewMail" @onSendEmail="sendEmail"></new-email>
                <email-list v-else :emails="emailsToShow" @remove="removeEmail" @selected="selectEmail"></email-list>
               
            </div>
        </section>
    `,
    data() {
        return {
            emails: [],
            selectedEmail: null,
            filterBy: null,
            isNewMail: false,
            sentMail: []
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
            this.sentMail.push(email)
            console.log(this.sentMail);
            this.isNewMail = false
            emailService.sendNewEmail(email)
                .then(() => {
                    this.loadEmails()
                })
        },
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
                    email.subject.toLowerCase().includes(searchStr) +
                    email.body.toLowerCase().includes(searchStr)
                );
            });

            return emailsToShow;
        },
        getUnreadNum() {
            const num = this.emails.filter((email) => {
                return (
                    email.isRead===false
                );
            });
            console.log(num);
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